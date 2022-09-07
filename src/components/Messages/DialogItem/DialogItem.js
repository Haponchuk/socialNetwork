import s from './../Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={"/messages/" + props.id}
                     className={navData => navData.isActive ? s.active : s.item}>
                <img src={props.profilePic}/>
                {props.name} </NavLink>
        </div>
    );
}


export default DialogItem;