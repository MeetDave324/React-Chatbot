import { createChatBotMessage } from "react-chatbot-kit";
import Options from './components/options'
import SpeechButton from './components/speechButton'
import UploadButton from './components/uploadFile'

const config = {
  initialMessages: [createChatBotMessage(`
  Hello! How can I help you?`,{
    widget: "options",
  })],
  botName:"Healthcare Bot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#3972db"
        },
    chatButton: {
      backgroundColor: "#3972db",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "speech",
      widgetFunc: (props) => <SpeechButton {...props} />,
    },
    {
      widgetName: "upload",
      widgetFunc: (props) => <UploadButton {...props} />,
    }
  ]
}

export default config