import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return(
        <div className={s.dialogItem}>
            <NavLink to={"/messages/" +props.id} className={navData => navData.isActive ? s.active : s.item}> {props.name} </NavLink>
        </div>
    );
}

const MessageItem = (props) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Messages = (props) => {

    let dialogsData = [
        {name: "Roma", id: 1},
        {name: "Artem", id: 2},
        {name: "Iqos", id: 3},
        {name: "Eva", id: 4},
        {name: "Zheton", id: 5}
    ];

    let messageData = [
        {message: "Старіна, пора пити пиво."},
        {message: "Яке ставлю пиво, у мене на баліку 20 грн."},
        {message: "А чому я пишу сам до себе, це шиза?"},
        {message: "Базару ноль."},
        {message: "Коли я вже нарешті приїду в цю Венецію?!"}
    ];


    return (
        <div className={s.appWrapper}>
            <div className={s.dialogs}>
                {
                    dialogsData.map(el => <Dialog name = {el.name} id={el.id} /> )
                }
            </div>

            <div className={s.messages}>
                {
                    messageData.map(el => <MessageItem message = {el.message} />)
                }

            </div>

        </div>

    );
}

export default Messages;