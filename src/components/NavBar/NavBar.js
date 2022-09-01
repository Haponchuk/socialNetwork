import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <div className={s.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>
                    My Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" className={navData => navData.isActive ? s.active : s.item}> Friends </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" className={navData => navData.isActive ? s.active : s.item}> Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/feed" className={navData => navData.isActive ? s.active : s.item}> Feed </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/community" className={navData => navData.isActive ? s.active : s.item}> Community </NavLink>
            </div>
            <div className={`${s.item} ${s.settings}`} >
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}> Settings </NavLink>
            </div>
        </nav>
    );
}
export default NavBar;