import axios from 'axios';
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;

    }
    // function1=()=>{
    //   axios.get("http://127.0.0.1:8000/predict/",{
    //     params:{
    //       "data":"Hi"
    //     }
    //   })
    //   .then((response)=>{
    //     console.log(response.data.data)
    //     this.setState(prevState => ({
    //       ...prevState, reply: response.data.data
    //     }))
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   });
    // }

    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      //API function here
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.function1()
        // this.actionProvider.greet("Hi")
      }
    }

  }
  
  export default MessageParser;