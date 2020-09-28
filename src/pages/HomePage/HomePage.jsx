import React, { Component } from 'react';
import {Header, Container} from 'semantic-ui-react'

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Container text>
    <Header as='h2'style={{textAlign: 'center'}} >How perform CRUD operations in React</Header>
    <p>
      This simple todo app demonstrates the very basics of a full stack application in React. CRUD is an acronym that stands for create, read, update, and delete operations on a backend database. 
    </p>
    <p>
    This little guide will cover the steps it took to create this Todo app in the MERN stack. MERN is another acronym that describes the technology stack that was used to create the app. The technologies used were MongoDB, Express, Reach, and Node.js. Node was used to write the server and Express is the middleware that was used. MongoDB is our backend database and React is our front end. We will be performing CRUD on the front end in react to change data in our backend, MongoDB, through our Node.js server. 
    </p>
    <p>
        I started on a starter template that had all the basic server written up. It also had React with all dependencies installed. This app was written with Semantic UI so I manually installed those dependacies. From here i turned App.js into a stateful component so that I can hold my data in state from an api call to the backend. 
    </p>
    <p>
        From here I made a navbar component so that I that navigate between different pages. React-Router will be used to accomplish this. I set up my menu options and my paths. I import the componenet into App.js and I test them to make sure I can navigate between the pages. 
    </p>
    <p>
        The next thing I need is a form. I make another stateful component so that I can hold the data entered in the form in state so that it can be used inconjunction with an api call to create data. In this component I import form components from semantic ui. Our Todo model in the back end will have a name and description attribute, so my form will reflect this. The input fields will have an onChange attribute that will equal a function that will handle changes to the DOM. The form needs to have a ref attribute created through React.createRef() to accomplish. There will also need to be an onSubmit function that will take in the form data and send it to the database to be created.
    </p>
    <p>
        Now that I have the UI element created I need to make sure I have the backend setup as the only thing that is setup is a default route. I need to create a route using express and make sure that my server is using that route. There will be 4 routes, one for each part of CRUD. The first route will be the create route which will be '/api/todos'. Once the route is created and being used by the server need create a modle using MongoDb. I connected my server in /config/database.js then proceed to make a modle. As mentioned the model will have name and description for the todo. Next will be a the controller. In the controller I create a function to create a document in MongoDb.
    </p>
    <p>
        Once a route to the backend is complete to create data, I need to create a service. In the todoService.js file I make create function to make an api call to the backend route. Before this can happen I need to make sure that package.json has the proxy set to localhost:3001 which is the port where the server is running. 
    </p>
    <p>
        Once the api function is created and exported, I import this function in App.js where my data for the todo's will live. Since the form is in another component, I will need create a function that utilizes the api in App.js and pass it down to the form component as a prop. 
    </p>
    <p>
        In the form component I will use the function from App.js in the onSubmit function to create the data. Once verify that the data is showing up on the backend I work on the index function which is the read in CRUD. 
    </p>
    <p>
    I follow the same process over and make sure there is a route to the back and a function in the controller get all the data from the backend. Once those are created I will create service to the backend. Again back in App.js I will use componentDidMount to make the api call so that I can populate the data from the backend in state as soon as components load. 
    </p>
    <p>
        Once I verify that the data is coming through in state through chrome dev tools, I pass down the state as props to a component that will display all the data in a list. I also write backend routes to delete and update data, create those services, then create those functions ins App.js. 
    </p>
    <p>
        On the component that shows all the todos I create a button to delete the data. Since I am using map to get each todo in its own component, I can create a button to delete a single todo. Using the service and routes already created I test the functionality. 
    </p>
    <p>
        The edit fucntionality is handled simliarly. Adding a button to the individual component shows a form similar to one used to add the todo and a function handed down from App.js to edit the data. 
    </p>
    <p>
        With that full crud is implemented in this App and deployed to heroku.
    </p>
  </Container>
            </>
         );
    }
}
 
export default HomePage;