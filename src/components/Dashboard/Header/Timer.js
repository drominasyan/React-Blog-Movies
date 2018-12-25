import React, {Component} from 'react';

class Timer extends Component {
    state = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        startStop: "Start"
    };

    startTimer = () => {
        if (this.state.startStop === "Start") {
            clearInterval(this.timer);
            this.timer = setInterval(this.tick, 1000);
            this.setState({
                startStop: "Stop"
            })
        } else {
            clearInterval(this.timer);
            this.setState({
                startStop: "Start"
            })
        }
    };
    tick = () => {
        this.setState((prevState) => ({seconds: prevState.seconds + 1}))
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.seconds === 60) {
            this.setState({
                seconds: 0,
                minutes: prevState.minutes + 1
            })
        }
        if (this.state.minutes === 60) {
            this.setState({
                seconds: 0,
                minutes: 0,
                hours: prevState.hours + 1
            })
        }
    }

    render() {
        return (
            <div className="timer">
                <span className={"hours"}>{this.state.hours} </span>
                <span className={"minutes"}>{this.state.minutes} </span>
                <span className={"seconds"}>{this.state.seconds}</span>
                <button className={"statStop"} onClick={this.startTimer}>{this.state.startStop}</button>
            </div>
        )
    }
}


export default Timer;
