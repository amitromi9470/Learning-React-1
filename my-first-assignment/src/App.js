import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state={
    username:"AmitRomi"
  }

  changenameHandler = (event) =>
  {
    this.setState({username:event.target.value})
  }
  render(){
  return (
    <div className="App">
      <UserInput changed={this.changenameHandler} currentName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Amitesh"/>
    </div>
  );
}
}

export default App;
