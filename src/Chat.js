import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    var messages1;
    const chatWithGPT3 = async (userInput) => {
        const apiKey = "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"
        const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        };

        const data = {
            max_tokens: 150,
            model: "gpt-3.5-turbo-1106",
            "messages": messages1,
        };
        try {
            const response = await axios.post(apiEndpoint, data, { headers });
            return response.data.choices[0].message?.content;
        } catch (error) {
            console.error('Error communicating with the API:', error.message);
            return '';
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input?.trim()) return;
        messages1 = [{ "role": "user", "content": input }]
        const userMessage = { text: input, user: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        const aiMessage = { text: '...', user: false };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
        const response = await chatWithGPT3(input);
        const newAiMessage = { text: response, user: false };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
        setInput('');
    };
    return (
        <>
            <div className="chatbot-container">
                <div>
                    <header className='float-start btn_color'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16">
                        <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356" />
                        <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0" />
                    </svg></header>
                </div>
                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.user ? 'user-message' : 'ai-message'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <form className="chatbot-input-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e?.target?.value)}
                        placeholder="Type your message..."
                    />
                    <button type="submit" className='btn_color'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                    </svg></button>
                </form>
            </div>
        </>
    )
}

export default Chat