import React from 'react'

export default props => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/#" >
                <i className='fa fa-calendar-check-o'></i>Todo                
            </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="/#" >Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/todos">Todo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/about">Sobre</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/help">Ajuda</a>
                </li>
                </ul>
                
            </div>
        </div>
    </nav>





/*

    <nav classNameName='navbar navbar-light bg-light'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>
                
            <div id='navbarText' className='navbar-collapse collapse'>
                <ul className="navbar-nav mr-auto">
                    <li><a href='#/todos'>Tarefas</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
 */   
)