import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
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

  // Function to remove Markdown
  const cleanMarkdown = (text) => {
    return text.replace(/(\*\*|##)/g, "");
  };

  // Apply cleaning to assistant messages
  messages.map(
    (m) =>
      (m.content =
        m.role === "assistant" ? cleanMarkdown(m.content) : m.content)
  );

  // Print cleaned messages
  messages.forEach((m) => {
    console.log(`${m.role}: ${m.content}`);
  });
  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="border rounded p-3 h-80 overflow-y-auto mb-3">
        <pre>
          {messages.map((m, i) => (
            <div key={i}>
              <b>{m.role}:</b> {m.content}
            </div>
          ))}
        </pre>
      </div>
      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about our web dev agency..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
