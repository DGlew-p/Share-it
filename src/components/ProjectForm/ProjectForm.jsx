
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
    console.log('ADD PROJECT');
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

  handleSubmit = async (evt) => {
    evt.preventDefault();
        try {
      const fetchResponse = await fetch('/api/projects/new', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: this.state.title,
          image_upload: this.state.image_upload,
          tech_stack: this.state.tech_stack,
          project_description:this.state.project_description,})
      })
      console.log(fetchResponse);
      if (!fetchResponse.ok) this.setState({error: "Bad Fetch"})
        } catch (err) {  console.log("hadleSub BROKE");
      }
}


  render() {
    return (
    <div>

    
    <form>
          <label>
            <span>Title:</span>
            <input name='title'
                    value={this.state.title}
                    onChange={this.handleChange}/>
          </label>
          
          <label>
            <span>Technologies:</span>
            <input name='tech_stack' 
                    type="text-area" 
                    value={this.state.tech_stack}
                    onChange={this.handleChange}/>
          </label>

          <label>
            <span>Project Description:</span>
            <input name='project_description' 
                    type="text-area" 
                    value={this.state.project_description}
                    onChange={this.handleChange}/>
          </label>

          <label>
            <span>Image:</span>
            <input name='image_upload' 
                    value={this.state.image_upload}
                    onChange={this.handleChange}/>
          </label>
          
  
          <button type="submit">Create</button>
          </form>
      
  </div>
    )}
}