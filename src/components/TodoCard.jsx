import React, {Component} from 'react';
import {Grid, Card, Button, Form, Popup} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class TodoCard extends Component {
    state = { 
        isEdit: false,
        formData: this.props.todo
     }

    handleChange = e => {
        const formData = {...this.state.formData,[e.target.name]: e.target.value}
        this.setState({formData})
    } 

    handleSubmit = e =>{
        e.preventDefault()
        this.renderEdit()
        this.props.handleUpdate(this.state.formData)
    }

    renderEdit = () => {
        this.setState({isEdit: !this.state.isEdit, formData: this.props.todo})
    }
    formRef = React.createRef()
    render() { 
        const {isEdit, formData} = this.state
        const {todo, handleDelete, handleUpdate} = this.props
        return (  <>
            { isEdit ?    
            
            <Grid.Column style={{width: 'auto'}}>
             
            <Card style={{marginBottom: '10px', width:'300px', height: 'auto'}}>
            <Card.Content style={{fontSize: '1.2rem', height: 'auto', zIndex: '1000', padding:'1rem'}}>
            <Form ref={this.formRef} onSubmit={this.handleSubmit}>
                <Grid>
                    <Grid.Column  width={16}>
                        <Form.Input 
                        onChange={this.handleChange}
                        value={this.state.formData.name} 
                        name='name'
                        style={{height:'2.5rem', marginBottom: '1rem'}} />   
                    </Grid.Column>
                </Grid>
            
                <Card.Description style={{height: '220px', fontSize: '1.2rem'}}>
                <Form.TextArea
                    name='description'
                    value={this.state.formData.description}
                    onChange={this.handleChange}
                    rows={9}
                />
                </Card.Description >
                </Form>
            </Card.Content>
            <Card.Content extra>
        
            <Popup style={{}}content='Click here to confirm change' trigger={<Button  onClick={this.handleSubmit} icon='check' floated='left' basic color='green' size='small'/>} />
            <Popup style={{}}content='Click here to cancel change' trigger={<Button onClick={this.renderEdit} icon='x' floated='right' basic color='red' size='small'/>} />
            </Card.Content>
            </Card>
            
            </Grid.Column>
           
            :   
            <Grid.Column style={{width: 'auto'}}>
        
            <Card style={{marginBottom: '10px', width:'300px', height: 'auto'}}>
            <Card.Content style={{fontSize: '1rem', height: 'auto', zIndex: '1000'}}>
                <Card.Header style={{wordWrap: 'break-word'}}>
                {todo.name} 
                
                    
                </Card.Header>
                </Card.Content>
            
            <Card.Content style={{height: '250px', fontSize: '1.2rem'}}>
                 
            <Card.Description>{todo.description} </Card.Description>
            </Card.Content>
            <Card.Content extra>
        
            <Popup style={{}}content='Click here to confirm edit' trigger={<Button onClick={this.renderEdit} icon='edit' floated='left' basic color='blue' size='small'/>} />
            <Popup style={{}}content='Click here to confirm delete' trigger={<Button onClick={()=>handleDelete(todo._id)} icon='x' floated='right' basic color='red' size='small'/>} />
            </Card.Content>
            </Card>
          
            </Grid.Column>
                
            
            }
            </> );
    }
}
 
export default TodoCard;


