import React, { Component } from 'react';
import {Grid, Form} from 'semantic-ui-react'

class AddTodo extends Component {
    state = { 
        invalidForm: true,
        formData: {
            name: '',
            description: ''
        }
     }


     handleSubmit = e => {
        e.preventDefault();
        
        this.props.handleAddTodo(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
          formData,
          invalidForm: formData.name.length && formData.description.length ? false : true
        });
      };
    
    formRef = React.createRef()
    render() { 
        return ( 

            <>
              <>
              <Grid verticalAlign='middle' columns={4} centered>
                    <Grid.Row>
                    <Grid.Column>
                    <h1 style={{textAlign: 'center'}}>Add Todo</h1>
                            <Form ref={this.formRef} onSubmit={this.handleSubmit}>
                                <Form.Input
                                    placeholder='Name'
                                    value={this.state.formData.name}
                                    name='name'
                                    onChange={this.handleChange}
                                />

                                
                                <Form.TextArea 
                                    placeholder='Description'
                                    value={this.state.formData.description}
                                    name='description'
                                    onChange={this.handleChange}
                                    rows={5}
                                />
                                <div style={{ textAlign: 'center'}}>
                                    <Form.Button style={{margin: '0 auto'}} content='Add Todo' positive disabled={this.state.invalidForm} />
                                </div>
                                
                            </Form>

                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            
            
            </>
            </>

         );
    }
}
 
export default AddTodo;