class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state=state
    }

    parse(message) {
      this.actionProvider.function1(message)  
    }

  }
  
  export default MessageParser;