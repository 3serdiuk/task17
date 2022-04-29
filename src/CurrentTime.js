import React from "react";

class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date(),
        };
    }
    
    isRunning = true;

    componentDidMount() {
        if (!this.isRunning) {
        this.timer = setInterval(
            () => this.tick(), 1000
        );
        this.isRunning = true;
        }
    }

    componentWillUnmount() {
        if (this.isRunning) {
        clearInterval(this.timer);
        this.isRunning = false;
        }
    }

    tick() {
        this.setState({ time: new Date() });
    }

    render() {
        return <>
            <h2>{this.state.time.toLocaleTimeString()}</h2>
            <button onClick={this.componentDidMount.bind(this)}>Start</button>
            <button onClick={this.componentWillUnmount.bind(this)}>Stop</button>
        </>
    }
}

export default CurrentTime;