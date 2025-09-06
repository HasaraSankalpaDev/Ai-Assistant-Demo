import { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsgs = [...messages, { role: "user", content: input }];
    setMessages(newMsgs);
    setInput("");

    const res = await fetch("http://localhost:5000/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMsgs }),
    });

    const data = await res.json();
    const reply =
      data.output_text || data.output?.[0]?.content[0]?.text || "No response";

    setMessages([...newMsgs, { role: "assistant", content: reply }]);
  };

  const cleanMarkdown = (text) => text.replace(/(\*\*|##)/g, "");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-5 rounded-full shadow-lg hover:scale-105 transition-transform text-2xl"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-3 w-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden border border-gray-300">
          {/* Header */}
          <div className="bg-black px-6 py-4 flex items-center justify-between text-white rounded-t-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                F
              </div>
              <div className="font-semibold text-lg">Fin • AI Agent</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 h-96 overflow-y-auto space-y-3 bg-gray-100">
            {messages.length === 0 ? (
              <div className="px-4 py-3 rounded-xl max-w-[70%] break-words bg-white text-black self-start shadow-sm border border-gray-300">
                How can I help you today?
              </div>
            ) : (
              messages.map((m, i) => (
                <div
                  key={i}
                  className={`px-4 py-3 rounded-xl max-w-[70%] break-words ${
                    m.role === "user"
                      ? "bg-black text-white self-end shadow-md"
                      : "bg-white text-black self-start shadow-sm border border-gray-300"
                  }`}
                >
                  {m.role === "assistant"
                    ? cleanMarkdown(m.content)
                    : m.content}
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-300 p-3 gap-3 bg-white">
            <input
              className="flex-1 p-3 rounded-xl border border-gray-400 outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-6 rounded-xl hover:bg-gray-800 transition shadow-md"
            >
              ➤
            </button>
          </div>

          {/* Privacy Note */}
          <div className="text-xs text-gray-500 p-2 border-t border-gray-300 text-center">
            By chatting with us, you agree to our Privacy Policy.
          </div>
        </div>
      )}
    </div>
  );
}
