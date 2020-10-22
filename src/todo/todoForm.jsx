import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './todo.css'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoAction'

class TodoForm extends Component{
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, clear, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape'){
            clear()
        }
    }

    render() {
        const { add, search, clear, description } = this.props
        return (
            <div role='form' className='Todo'>
                <Grid cols='12 9 10'>            
                    <input id='description' className='form-control' 
                        placeholder='Adicione uma tarefa'
                        //A propriedade changeDescription está apontando para a Action, graças ao mapeamento 
                        //realizado abaixo pelo mapDispatchToProps. O método onChange recebe um evento como parâmetro.
                        //Observer que o método changeDescription (definido em todoAction.js) recebe um evento como parâmetro.
                        onChange = {this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value = {this.props.description}>
                        </input>        
                </Grid>
        
                <Grid cols='12 3 2'>
                    <div className='Button'>
                        <IconButton style={`primary ml-auto`} icon='plus'
                            onClick={() => add(description)} ></IconButton>
                        <IconButton style={`info`} icon='search'
                            //onClick={() => search()} Como search() não tem parâmetro, a forma abaixo pode ser usada.
                            onClick={search}></IconButton>
                        <IconButton style={`secondary`} icon='close'
                            onClick={() => clear()}></IconButton>
                    </div>
                </Grid>
            </div>
        )
    }
}


//Faz com que o estado "description" apareça no Props.
const mapStateToProps = state => ({description: state.todo.description})
//Faz com que a Action "changeDescription" apareça no Props. O dispatch é o objeto que realmente dispara as actions para serem recebidas pelos reducers
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)