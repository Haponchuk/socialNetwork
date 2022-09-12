import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {useLocation} from "react-router-dom";
import React from "react";

const Messages = (props) => {

    const {
        state
    } = props

    const {
        messageData,
        dialogData
    } = state

    const location = useLocation()
    const number = location.pathname.split('/')[2]

    let newMessageElement = React.createRef();

    return (
        <div className={s.appWrapper}>
            <div className={s.dialogs}>
                {
                    dialogData.map(el => <DialogItem name={el.name} id={el.id} profilePic={el.profilePic}/>)
                }
            </div>

            {number && <div className={s.messages}>
                <MessageItem message={messageData[number - 1]?.message || ''}/>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={ () => {alert(newMessageElement.current.value);}}>send message</button>
            </div>}
        </div>
    );
}

export default Messages;