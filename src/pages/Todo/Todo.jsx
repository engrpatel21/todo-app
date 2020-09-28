import React, { Component } from 'react';
import {Grid, Container} from 'semantic-ui-react'
import TodoCard from '../../components/TodoCard'


class Todo extends Component {
    state = {  }
    render() { 
        const {todos, handleDeleteTodo, handleUpdateTodo} = this.props
        return ( 
        <>
         <Grid  columns='equal' divided>
            <Grid.Row style={{margin: '0px 30px'}}>
            <Grid.Column>
                <Container textAlign='center' style={{fontSize:'3rem', height: '3rem'}}>Todos</Container>
                <Grid >
                <Grid.Row style={{margin: '0 30px'}}> 
                {todos.map((todo,idx) =>
                
                    <TodoCard todo={todo} handleDelete={handleDeleteTodo} handleUpdate={handleUpdateTodo} key={idx} />
                )}
           
                </Grid.Row>
                </Grid>
            </Grid.Column>
           
            </Grid.Row>
        </Grid>
        </> );
    }
}
 
export default Todo;