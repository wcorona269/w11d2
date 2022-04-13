import React from "react";

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.uniqueId(),
      title: '',
      body: '',
      done: ''
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    this.setState({body: e.target.value});

  } 

  updateDone(e) {
    this.setState({ done: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();   
    this.props.receiveTodo(this.state);
    this.setState({
      id: this.uniqueId(),
      title: '',
      body: '',
      done: ''
    })
  }

  uniqueId() {
    return new Date().getTime();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add Todo</h1>
        <label>Title
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateTitle}
            />
        </label>
        <br/>
        <br/>
        <label>Body
          <input 
            type="text"
            value={this.state.body}
            onChange={this.updateBody}
            />
        </label>
        <br/>
        <br/>
        <label name="done">Done?
          <input name="done" type="radio" value="true" onChange={this.updateDone}/>True
          <input name="done" type="radio" value="false" onChange={this.updateDone}/>False
        </label>
        <br/>
        <br/>
        <input type="submit" value="Add Todo"/>
      </form>
    )
  }
}

export default TodoForm;