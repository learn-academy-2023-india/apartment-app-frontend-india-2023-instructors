import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"

const Header = ({currentUser, logout}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/")
  }
  return (
    <>
      <Nav className="nav">
        <NavItem>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">View Listings</NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/myapartments" className="nav-link">My Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew" className="nav-link">Create Listing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" onClick={handleClick}>Log Out</NavLink>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/signin" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
          </NavItem>
          </>
        )}
      </Nav>
    </>
  )
}

export default Header