import { memo } from "react";
import { useState, useRef, useEffect } from "react";
// css!
import css from "./ChatBot.module.css";
import { Search } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hooo… 🌿You found the forest… I’ve been waiting for you. What shall we discover today?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    // Fake bot reply for now
    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: "Totoro is thinking... 🍃 \n (see you after update..)",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);
    setInput("");
  };
  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={css.bodyFlex}>
      <div className={css.container}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={
              msg.sender === "user" ? styles.userMessage : styles.botMessage
            }
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className={css.inputBox}>
        <Search />
        <input
          className={css.input}
          type="text"
          placeholder="Talk to Totoro..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
      </div>

      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </div>
  );
};

const styles = {
  chatBox: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
  userMessage: {
    alignSelf: "flex-end",
    background: "#4caf50",
    padding: "10px 15px",
    borderRadius: "15px",
    margin: "10px 0",
    maxWidth: "60%",
    color: "white",
  },
  botMessage: {
    alignSelf: "flex-start",
    background: "#333",
    padding: "10px 15px",
    borderRadius: "15px",
    margin: "10px 0",
    maxWidth: "60%",
    color: "white",
  },
};

export default memo(ChatBot);

// “Hooo… 🌿
//             <br /> You found the forest… I’ve been waiting for you. <br /> What
//             shall we discover today?”
