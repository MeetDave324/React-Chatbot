import axios from 'axios';
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state=state
    }

    parse(message) {
      // const lowerCaseMessage = message.toLowerCase()
      //API function here

      this.actionProvider.function1(message)
      
    }

  }
  
  export default MessageParser;