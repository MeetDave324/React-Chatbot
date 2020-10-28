import axios from 'axios';
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet(str) {
      const greetingMessage = this.createChatBotMessage(str);
      this.updateChatbotState(greetingMessage)
    }
    function1=()=>{
      axios.get("http://127.0.0.1:8000/predict/",{
        params:{
          "data":"Hi"
        }
      })
      .then(function (response){
        this.setState({reply:response.data.data})
        console.log(this.state)
        // const greetingMessage = this.createChatBotMessage(response.data.data);
        // this.updateChatbotState(greetingMessage)
      })
      .catch(function(err){
        console.log(err)
      });
    }

    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider;