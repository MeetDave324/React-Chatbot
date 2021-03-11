import React from "react";
const uploadButton = (props) => {     
    const options = [
      {
        text: 'Upload file',
        handler: () => {
            props.actionProvider.handleImage()},
        id: 1,
      },
    ];
    const imageChange=(e)=>{
        console.log(e);
    }
    const handleSubmit=()=>{
        console.log()
    }
    const buttonsMarkup = options.map((option) => (
    <form onSubmit={handleSubmit}>
        <input type="file" id="image" onChange={imageChange}/>
        <input type="submit" onSubmit={imageChange}/>
    </form>
    ));
  
    return <div className="options-container">{buttonsMarkup}</div>;
  };
  
export default uploadButton;