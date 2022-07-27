import React from 'react'
import Contacts from '../components/Contacts'
import ConversationDetails from '../components/ConversationDetails'
import Conversations from '../components/Conversations'

const ChatScreen = () => {
  return (
    <div className='chat_screen h-screen grid grid-cols-[auto_1fr_auto] bg-[#161719] text-white'>
        <Contacts />
        <Conversations />
        <ConversationDetails />
    </div>
  )
}

export default ChatScreen