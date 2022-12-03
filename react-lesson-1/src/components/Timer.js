import React from "react";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => ({ ...state, seconds: ++state.seconds }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Yiu are here already more than {this.state.seconds} seconds.</div>
    );
  }
}
