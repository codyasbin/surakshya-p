import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import chatData from '../../lib/chatData';

const ChatBot = ({ onClose }: { onClose: () => void }) => {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState('');
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        const botResponse = chatData[input.trim().toLowerCase()] || "I'm not sure how to respond to that.";
        const botMessage = { sender: 'bot', text: botResponse };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <motion.div
            className="w-96 max-w-full h-[32rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 shadow-2xl rounded-2xl flex flex-col border border-gray-700"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex justify-between items-center bg-gradient-to-r from-indigo-700 via-indigo-800 to-gray-900 text-white p-4 rounded-t-2xl border-b border-gray-700">
                <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                    <h2 className="text-lg font-bold tracking-wide">AI ChatBot</h2>
                </div>
                <button
                    onClick={onClose}
                    className="text-2xl font-bold text-gray-300 hover:text-red-400 transition-colors duration-150"
                    aria-label="Close ChatBot"
                >
                    &times;
                </button>
            </div>
            <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto px-4 py-6 space-y-3 bg-gradient-to-b from-gray-900/80 to-gray-800/80"
            >
                {messages.length === 0 && (
                    <div className="text-center text-gray-400 italic space-y-2">
                        <div>Say hello to start the conversation!</div>
                        <div className="mt-3 text-left">
                            <div className="font-semibold text-gray-300 mb-1">Try asking:</div>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                                <li>"What is AI-Solution?"</li>
                                <li>"Features of AI-Solution"</li>
                                <li>"How can AI-Solution help me?"</li>
                            </ul>
                        </div>
                    </div>
                )}
                {messages.map((msg, index) => (
                    <motion.div
                        key={index}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        initial={{ opacity: 0, x: msg.sender === 'user' ? 40 : -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div
                            className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-md text-sm break-words
                                ${msg.sender === 'user'
                                    ? 'bg-indigo-600 text-white rounded-br-none'
                                    : 'bg-gray-700 text-gray-100 rounded-bl-none border border-indigo-700'
                                }`}
                        >
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="p-4 border-t border-gray-700 bg-gray-900/80 rounded-b-2xl">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="flex-1 p-2 rounded-xl bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-semibold shadow transition disabled:opacity-50"
                        disabled={!input.trim()}
                    >
                        Send
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ChatBot;