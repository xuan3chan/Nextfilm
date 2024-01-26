import axios from "axios";
import React, { useEffect, useState } from "react";
import "@/styles/app.css";
export default function ChatGeminiBox() {
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessage, setOutputMessage] = useState("");
  const ApiLink = "http://localhost:8000/api/chatgenmi/chat";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(ApiLink, {
        input: inputMessage,
      });
      setOutputMessage(response.data.output);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="wrapper flex flex-col">
      <div className="flex flex-col gap-2 w-2/3">
        Nhập tin nhắn
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button className="btnNewFilm" onClick={handleSubmit}>
          Gửi
        </button>
      </div>
      <div className="OutputField border-black border-1 p-10 mt-10 w-2/3">
        OutPut :{outputMessage && <p>{outputMessage}</p>}
      </div>
    </div>
  );
}
