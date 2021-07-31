
import React from 'react'



export default class ProjectForm extends React.Component {

  state = {
    title: "", 
    image_upload: "", 
    tech_stack: "",
    project_description:"",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  addProject = async (e) => {
    let options = {
      method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...this.state})
    }
    await fetch ("./api/projects", options)
    .then (res => res.json())
    .then(data=>{
      this.setState({
        projects:[]
      })
    })
  }


  render() {
    return (
    <div>
  <hr />
    
    <form>
          <label>
            <span>Name:</span>
            <input name='name'
                    value={this.state.title}
                    onChange={this.handleChange}/>
          </label>
          
          <label>
            <span>Message:</span>
            <input name='message' 
                    type="text-area" 
                    value={this.state.tech_stack}
                    onChange={this.handleChange}/>
          </label>

          <label>
            <span>Message:</span>
            <input name='message' 
                    type="text-area" 
                    value={this.state.project_description}
                    onChange={this.handleChange}/>
          </label>

          <label>
            <span>email:</span>
            <input name='email' 
                    value={this.state.image_upload}
                    onChange={this.handleChange}/>
          </label>
          
          <button onClick={this.addProject}>Create</button>
          </form>
        <hr />
  </div>
    )}
}