import { ToyReact, Component } from "./ToyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <div>child</div>
        <div>{this.children}</div>
      </div>
    );
  }
}


class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    return <button onClick={() => {
      this.setState({ value: 1 })
      console.log('button click state', this.state)
    }}>
      {this.state.value}
      hello
    </button>
  }
}

const a = (
  <MyComponent name="a" id="idx">
    <Square />
    <Square />
  </MyComponent>
);

ToyReact.render(a, document.getElementById("app"));