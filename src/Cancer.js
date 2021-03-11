import React, { Component } from 'react';
import axios from 'axios';

class Cancer extends Component {

  state = {
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
      console.log("Image change");
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    console.log("Submit");
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    let url = 'http://127.0.0.1:8000/cancer/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data); //predicted class here in response
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required name="sentFile"/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Cancer;