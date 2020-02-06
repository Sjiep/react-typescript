import React from 'react';

interface Props {
  foo?: string
}

interface State {
  counter: number
}

export class App extends React.Component<Props, State>{

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
    const color = counter % 2 ? 'yellow' : 'green';
    return (
      <div style={{backgroundColor: color}}>Hello {counter + 100}!</div>
    );
  }
}
