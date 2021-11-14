import { NavLink } from "react-router-dom"
import classes from "./NavBar.module.css"

const NavBar = (props) => {
    

    return (
        <nav className={props.className}>
            <ul className={classes["nav-list"]}>
                <li>
                    <NavLink className={({isActive})=>isActive?classes.active:""} to="/curr-reading">currently reading</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?classes.active:""} to="/want-to-read">want to read</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?classes.active:""} to="/read">read</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar