import { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const [chat, setChat] = useState('');

    return (
        <ChatContext.Provider value={{ chat, setChat }}>
            {children}
        </ChatContext.Provider>
    );
}