import React from 'react';
import {render} from 'react-dom';

// Practice with props
function WelcomeWithProps(props) {
  return (
    <div>
      <h1>Hello, {props.inputName}.</h1>
      <h2>It is {props.currentDate.toLocaleTimeString()}. Use props.</h2>
      <h1>----------------------------</h1>
    </div>
  );
}

// Practice with state
class WelcomeWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.inputName}!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}. Use state.</h2>
        <h1>----------------------------</h1>
      </div>
    );
  }
}

// state change
class WelcomeWithStateChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h1>State Change</h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'You haven\'t liked this. Click to toggle.' : 'You like this. Click to toggle.'}
        </button>
        <h1>----------------------------</h1>
      </div>
    );
  }
}

function RootComponent(props) {
  return (
    <div>
      <WelcomeWithProps inputName = "Bao Tran" currentDate={new Date()}/>
      <WelcomeWithState inputName="Bao Tran"/>
      <WelcomeWithStateChange/>
    </div>
  );
}

render(
  <RootComponent/>,
  document.getElementById('root')
);
