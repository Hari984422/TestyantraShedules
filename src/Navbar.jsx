import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://placements.jspiders.com/sites/default/files/QJsp_0.png" alt="" />
            </div>
            <div className="options">
            <Dropdown>
      <Dropdown.Toggle variant="warning" className='mx-3' style={{color:"white",fontWeight:"bold"}} id="dropdown-basic">
      <AccountCircleIcon/> Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/addTask">Add Task</Dropdown.Item>
        <Dropdown.Item href="/">Trainer Details</Dropdown.Item>
        <Dropdown.Item href="#">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
        </div>
    )
}

export default Navbar
