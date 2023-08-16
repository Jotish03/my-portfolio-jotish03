import React, { useEffect, useState } from "react";

const TypingText = () => {
  const messages = [
    "Hello, I am Jotish Sharma.",
    "Type '/jotishresume' to download my resume.",
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentMessageIndex <= messages[messageIndex].length) {
        setCurrentMessage(messages[messageIndex].slice(0, currentMessageIndex));
        setCurrentMessageIndex(currentMessageIndex + 1);
      } else if (currentMessageIndex > messages[messageIndex].length + 4) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentMessage("");
          setCurrentMessageIndex(0);
          setMessageIndex((messageIndex + 1) % messages.length);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentMessage, currentMessageIndex, messageIndex]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((messageIndex + 1) % messages.length);
      setCurrentMessage("");
      setCurrentMessageIndex(0);
    }, 4000);

    return () => clearInterval(messageInterval);
  }, [messageIndex]);

  return (
    <div className="mt-[-30px] p-4 bg-0d1117 shadow-md rounded ">
      <div className="text-00ff00 md:flex">
        <span className="hidden md:inline-block">user@portfolio:</span>
        <span className="md:hidden">~$ </span>
        <span className="text-c8c8c8 md:inline md:whitespace-nowrap md:break-normal">
          {currentMessage}
        </span>
      </div>
    </div>
  );
};

export default TypingText;
