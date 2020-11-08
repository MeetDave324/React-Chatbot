import axios from 'axios';

class ActionProvider{
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.state={
        messages:""
      };
    }
    greet(str) {
      const greetingMessage = this.createChatBotMessage(str);
      this.updateChatbotState(greetingMessage)
    }

    handleLanguage = (lang) => {
      var msg;
      if(lang==='en'){
        msg = "English language selected";
      }
      else if(lang==='hi'){
        msg = "आपने हिंदी भाषा का चयन किया है";
      }
      else{
        msg = "તમે ગુજરાતની પસંદગી કરી છે";
      }
      const message = this.createChatBotMessage(
        msg,
      );
      localStorage.setItem("language", lang);
      this.updateChatbotState(message);
      console.log(localStorage.getItem("language"))
    };

    async translate(lowerCaseMessage){

      console.log("Not Translated ",lowerCaseMessage)
      lowerCaseMessage=await axios.get("http://127.0.0.1:8000/translate/",{
          params:{
            text:lowerCaseMessage,
            lang:localStorage.getItem("language")
          }
        })
        console.log("Translation ",lowerCaseMessage.data.text)
        lowerCaseMessage=lowerCaseMessage.data.text;
        return lowerCaseMessage;
    }

    async function1(lowerCaseMessage){
      //translate api
      try{
        if (localStorage.getItem("language")!="en")
        {
          lowerCaseMessage=await this.translate(lowerCaseMessage);
        }
        console.log("Translated ",lowerCaseMessage)
        var data=await axios.get("http://127.0.0.1:8000/predict/",{
          params:{
            "data":lowerCaseMessage,
            "lang":localStorage.getItem("language")
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
      console.log(this.state.messages)
    }
  }
  
  export default ActionProvider;