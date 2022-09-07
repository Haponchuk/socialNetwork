import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {
    return (
        <div className={s.appWrapper}>
            <div className={s.dialogs}>
                {
                    props.state.dialogData.map(el => <DialogItem name={el.name} id={el.id} profilePic={el.profilePic}/>)
                }
            </div>

            <div className={s.messages}>
                {
                    props.state.messageData.map(el => <MessageItem message={el.message}/>)
                }
            </div>
        </div>
    );
}

export default Messages;