import React from 'react';
import { hot } from 'react-hot-loader/root';

let test: string;
test = 'world';

interface Props {
  foo?: string
}

interface State {
  counter: number
}

class App extends React.Component<Props, State>{
  
  private inc = -11;

  public constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount(): void {
    setInterval(this.increment.bind(this), 1000)
  }

  increment(): void {
    this.setState(({counter}) => ({
      counter: counter + this.inc
    }))
  }
  
  render(): JSX.Element {
    const { counter } = this.state;
    const color = counter % 2 ? 'yellow' : 'green'
    return (
      <div style={{backgroundColor: color}}>Hello {test} {counter + 100}!</div>
    );
  }
}

export default hot(App);