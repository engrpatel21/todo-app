import React, { Component } from 'react';
import {Segment, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              as={Link}
              to='/'
              name='React CRUD guide'
              active={activeItem === 'React CRUD guide'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/todo'
              name="todos"
              active={activeItem === 'todos'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/addtodo'
              name='add todo'
              active={activeItem === 'add todo'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
      )
    }
}
 
export default NavBar;