import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hey!! How can I help you?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#276B1E",
    },
    chatButton: {
      backgroundColor: "#276B1A",
    },
  }
}

export default config