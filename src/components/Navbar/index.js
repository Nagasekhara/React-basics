import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>

		<NavLink to="/mobx" activeStyle>
			Mobx-react state
		</NavLink>

		<NavLink to="/recoil" activeStyle>
			Recoil state
		</NavLink>
		<NavLink to="/redux" activeStyle>
			Redux state
		</NavLink>
		<NavLink to="/hooks" activeStyle>
			Hooks state
		</NavLink>
		<NavLink to="/dashboard" activeStyle>
			Dashboard
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/login" activeStyle>
			Login
		</NavLink>
		<NavLink to="/signup" activeStyle>
			Sign Up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
