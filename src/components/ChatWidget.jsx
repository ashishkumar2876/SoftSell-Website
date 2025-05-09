import React, { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! How can I assist you with SoftSell today?' },
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant for the SoftSell website.' },
            ...messages.map((msg) => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text,
            })),
            { role: 'user', content: input },
          ],
        }),
      });

      const data = await response.json();
      const aiReply = data.choices?.[0]?.message?.content || 'No response from AI.';
      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    } catch (err) {
      console.error('Fetch error:', err);
      setMessages((prev) => [...prev, {
        sender: 'ai',
        text: "Sorry, I couldn't respond at the moment. Please try again later.",
      }]);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full z-50 shadow-lg"
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 shadow-lg border rounded-lg bg-white flex flex-col z-40">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            <h2 className="text-lg font-semibold">SoftSell Assistant</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-3 h-64" ref={containerRef}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex border-t">
            <input
              type="text"
              className="flex-1 p-2 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button className="bg-blue-600 text-white px-3" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
