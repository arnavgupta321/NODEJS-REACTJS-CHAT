import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '6f5ee8d6-8dcb-48f5-80f6-8c81c0db8024',
        props.user.username,
         props.user.secret,
        );
    return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow{...chatProps} style={{ height: '100%'}}/>
    </div>
    )
}

export default ChatsPage