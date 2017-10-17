import React, {Component} from 'react';
import Link, {NavLink} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <ul className='nav'>
        <li style={{marginLeft: '5px', display: 'inline'}}>
          <NavLink exact activeClassName='active' to='/'>Start</NavLink>
        </li>
        <li style={{marginLeft: '5px', display: 'inline'}}>
          <NavLink activeClassName='active' to='/one'>One</NavLink>
        </li>
        <li style={{marginLeft: '5px', display: 'inline'}}>
          <NavLink activeClassName='active' to='/two'>Two</NavLink>
        </li>
      </ul>
    )
  }
}

export default Nav;