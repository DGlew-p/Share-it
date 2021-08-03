
import { Component, useState } from 'react';
import { Wrapper, Input } from './ProjectForm.styles';  


import React from 'react'


export default class ProjectForm extends Component {

  state = {
  title:"",
  tech_stack:"",
  project_description:"",
  image:{url:"1",filename:"2"}

  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



  handleSubmit = async (evt) => {
    evt.preventDefault();

        try {
          let jwt = localStorage.getItem('token')
          const fetchResponse = await fetch('/api/projects/new', {
            method: 'POST',
            headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
            body: JSON.stringify({
              image:this.state.image,
              title:this.state.title ,
              tech_stack:this.state.tech_stack,
              project_description:this.state.project_description,
              object_id_reference:this.props.user._id
            })
      })
      await fetchResponse.json()
      console.log(fetchResponse+"   FORM FETCH")
      this.setState({
        title:"",
        tech_stack:"",
        project_description:"",
        // image:{url:"",filename:""}
      })

    
     } catch (err) {
       console.log('BAD FETCH' , err);
        }
  }



  render() {
    return (

    <div className="form-container">
   
          <form autoComplete="on" 
                onSubmit={this.handleSubmit}
                enctype="multipart/form-data">   
           <Wrapper>
          <label>Title:</label>
            <Input name='title'
                    value={this.state.title}
                    onChange={this.handleChange}/>
          
          
          
          <label>Technologies:</label>
            <Input name='tech_stack' 
                    type="text-area" 
                    value={this.state.tech_stack}
                    onChange={this.handleChange}/>
        

          
        <label>Project Description:</label>
            <Input name='project_description' 
                    type="text-area" 
                    value={this.state.project_description}
                    onChange={this.handleChange}/>
         




 
         <label>Upload An Image</label>
         <input class="file-input" 
                type="file" name="image"
                onChange={this.handleChange}/>
         <i class="fas fa-upload"></i>
         <span class="file-label"> Choose a file… </span>




  
          <button type="submit">Create</button>
          </Wrapper>
          </form>
  </div>
    )}
}