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

const element = <WelcomeWithProps inputName = "Bao Tran" currentDate={new Date()}/>;

ReactDOM.render(
  element,
  document.getElementById('with_props')
);

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

ReactDOM.render(
  <WelcomeWithState inputName="Bao Tran"/>,
  document.getElementById('with_state')
);

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

ReactDOM.render(
  <WelcomeWithStateChange/>,
  document.getElementById('state_change')
);

// sub-component
function Component(props) {
  return (
    <div>
      <h2>Here is component {props.version}.</h2>
    </div>
  );
}

function CombineSubComponent(props) {
  return (
    <div>
      <h1>Sub Components</h1>
      <Component version = "1"/>
      <Component version = "2"/>
    </div>
  );
}

const combinedElement = <CombineSubComponent/>;

ReactDOM.render(
  combinedElement,
  document.getElementById('sub_component')
);
