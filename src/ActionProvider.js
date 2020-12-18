import axios from 'axios';

class ActionProvider{
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.state={
        messages:"",
        flag:0,
      };
    }
    greet(str) {
      const greetingMessage = this.createChatBotMessage(str,{
        withAvatar: false,
        delay:500,
        widget: "speech",
      });
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
        msg,{
          withAvatar: false,
          delay:500,
          widget: "speech",
        }

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

    async speechToText(text){
      text=await axios.get("http://127.0.0.1:8000/listen/",{
        params:{
          lang:localStorage.getItem("language")
        }
      })
      console.log(text.data.text);
      
      const message2 = this.createClientMessage(
        text.data.text
      );
      this.updateChatbotState(message2);
      this.function1(text.data.text);
      
      localStorage.setItem("flag",1);
      console.log(this.state);

    }

    async textToSpeech(text){
      if(localStorage.getItem('flag')==1){
        text = await axios.get("http://127.0.0.1:8000/speak/",{
          params:{
            lang:localStorage.getItem("language"),
            text:text
          }
        }) 
        localStorage.setItem("flag",0);
      }else{
        
      }
    
    }

    async function1(lowerCaseMessage){
      //translate api
      try{
        if (localStorage.getItem("language")!="en")
        {
          lowerCaseMessage=await this.translate(lowerCaseMessage);
        }
        console.log("Translated ",lowerCaseMessage)
        lowerCaseMessage=lowerCaseMessage.toLowerCase();
        console.log("Lower case"+lowerCaseMessage);

        var data=await axios.get("http://127.0.0.1:8000/predict/",{
          params:{
            "data":lowerCaseMessage,
            "lang":localStorage.getItem("language")
          }
        })
        console.log(data)
        this.greet(data.data.data)

        this.textToSpeech(data.data.data)

        if(data.data.description!==""){
          const greetingMessage = this.createChatBotMessage(data.data.description);
          this.updateChatbotState(greetingMessage)
        }
        if(data.data.precautions!==""){
          const greetingMessage = this.createChatBotMessage(data.data.precautions);
          this.updateChatbotState(greetingMessage)
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