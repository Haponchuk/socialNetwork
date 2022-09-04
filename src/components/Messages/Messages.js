import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return(
        <div className={s.dialogItem}>
            <NavLink to={"/messages/" +props.id}> {props.name} </NavLink>
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
    return (
        <div className={s.appWrapper}>
            <div className={s.dialogs}>
                <Dialog name="Roma" id="1" />
                <Dialog name="Artem" id="2" />
                <Dialog name="Iqos" id="3" />
                <Dialog name="Eva" id="4" />
            </div>

            <div className={s.messages}>
                <MessageItem message="Старіна, пора пити пиво." />
                <MessageItem message="Яке ставлю пиво, у мене на баліку 20 грн." />
                <MessageItem message="А чому я пишу сам до себе, це шиза?" />
                <MessageItem message="Базару ноль." />
            </div>

        </div>

    );
}

export default Messages;