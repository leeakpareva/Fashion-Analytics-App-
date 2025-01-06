import React, { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <ChatWindow isOpen={isOpen} />
    </>
  );
};

export default Chat;