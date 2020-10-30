import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`
  નમસ્તે!! હું આપની શું મદદ કરી શકું?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#276B1E"
        },
    chatButton: {
      backgroundColor: "#276B1A",
    },
  }
}

export default config