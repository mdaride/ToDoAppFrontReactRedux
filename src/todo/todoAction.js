import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

//Esse action creator, faz uso do middleware redux-promisse. Com isso, os 
//reducers só serão chamados quando a request receber o resultado da execução do get
export const search = () => {
    return (dispatch, getState) => {
        //Não é para fazer isso sempre: pegar o description do state. Isso foi feito para 
        //não ter que passar o description como parâmetro para o add(), markAsDone(), markeAsPending()
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }   
}

/*
//Esse action creator faz uso do middleware redux-multi. Com isso, esse action creator consegue
//retorna mais de uma action. Assim, ele retorna um array de actions.
export const add = (description) => {
    const request = axios.post(URL, {description})
    return [{type: 'TODO_ADDED', payload: request},
            search()
    ]
}
*/

//Esse action creator retorna uma função em vez de um objeto Action.
//Isso é possível graças ao component redux-thunk.
//Com isso, é possível realizar o dispatching de ações assíncronas, como por exemplo,
//adcionar um item ao banco de dados, despachar a action 'TODO_ADDED' com a resposta do req
//a fazer a atualização da tela.
export const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))        
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done:true })
            //A linha abaixo não é necessária, pois o dado já foi atualizado no BD
            .then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done:false})
            //A linha abaixo não é necessária, pois o dado já foi atualizado no BD
            .then(resp => dispatch({type: 'TODO_MARKED_AS_PENDING', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)            
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}
