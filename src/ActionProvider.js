import axios from 'axios';

// import translate from 'google-translate-api';
class ActionProvider{
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;

    }
    greet(str) {
      const greetingMessage = this.createChatBotMessage(str);
      this.updateChatbotState(greetingMessage)
    }
    async translate(lowerCaseMessage){

      lowerCaseMessage=await axios.get("http://127.0.0.1:8000/translate/",{
          params:{
            text:lowerCaseMessage
          }
        })
        console.log("Translation ",lowerCaseMessage.data.text)

        lowerCaseMessage=lowerCaseMessage.data.text;

        return lowerCaseMessage;
    }

    async function1(lowerCaseMessage){
      //translate api
      try{
        lowerCaseMessage=await this.translate(lowerCaseMessage)
        var data=await axios.get("http://127.0.0.1:8000/predict/",{
          
          params:{
            "data":lowerCaseMessage,
            "lang":"en"
          }
        })
        console.log(data)
        this.greet(data.data.data)
        if(data.data.description!==""){
          this.greet(data.data.description)
        }
        if(data.data.precautions!==""){
          this.greet(data.data.precautions)
        }
      }
      catch(err){
        console.log(err)
      }
     
    }

    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider;