import React from 'react'
import { Navbar } from 'react-bootstrap'

class Title extends React.Component{
    render() {
        return (
<Navbar>
  <Navbar.Header>
   <a className="title" href='/'><h1><i>pillBox</i></h1></a>
    </Navbar.Header>
  {/* <Nav> */}
    {/* <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem> */}
    {/* </NavDropdown> */}
  {/* </Nav> */}
</Navbar>
        )
    }
}

export default Title