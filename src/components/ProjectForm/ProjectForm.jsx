
import { Component } from 'react';
import { Wrapper, Input } from './ProjectForm.styles';  

export default class ProjectForm extends Component {

  state = {
  title:"",
  tech_stack:"",
  project_description:"",
  object_id_reference:""

  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState( {object_id_reference:this.props.user._id});
        try {
          let jwt = localStorage.getItem('token')
          const fetchResponse = await fetch('/api/projects/new', {
            method: 'POST',
            headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
            body: JSON.stringify({title:this.state.title , tech_stack:this.state.tech_stack, project_description:this.state.project_description, object_id_reference:this.props.user._id})
      })
      let serverResponse = await fetchResponse.json()
      this.setState({})
      console.log("handlesub SERVER RESP:", serverResponse)
    
     } catch (err) {
       console.log('BAD FETCH' , err);
        }
  }



  render() {
    return (
    <div className="form-container">
          <form autoComplete="on" onSubmit={this.handleSubmit}>   
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
         

          {/* <label>Image:</label>
            <Input name='image_upload' 
                    value={this.state.image_upload}
                    onChange={this.handleChange}/> */}
         
          
  
          <button type="submit">Create</button>
          </Wrapper>
          </form>
  </div>
    )}
}