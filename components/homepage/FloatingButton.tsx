"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "./ChatBot";

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            {/* ChatBot popup with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chatbot"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="mb-4"
                    >
                        <ChatBot onClose={() => setIsOpen(false)} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen((v) => !v)}
                className="group p-5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-full shadow-2xl focus:outline-none relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 16px 4px #6366f1, 0 0 32px 8px #3b82f6",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                aria-label="Chat with AI"
            >
                <span className="text-2xl">💬</span>
                {/* Tooltip */}
                <span
                    className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-gray-100 text-xs px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                >
                    Chat with Chatbot
                </span>
                {/* Glowing ring effect */}
                <motion.span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    animate={{
                        boxShadow: isOpen
                            ? "0 0 0 6px rgba(99,102,241,0.3)"
                            : "0 0 0 0 rgba(99,102,241,0.0)",
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
        </div>
    );
};

export default FloatingButton;