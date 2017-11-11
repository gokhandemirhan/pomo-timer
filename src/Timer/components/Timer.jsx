import React, {Component} from 'react';
import moment from 'moment';
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay'
import TimerButtons from '../../TimerButtons/components/TimerButtons'

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime:moment.duration(25,'minutes')
        }
    }
    render() {
        return (
            <div className="container has-text-centered">
                <h3 className="title is-3">
                    Pomodoro Timer
                </h3>
                <TimerDisplay />
                <TimerButtons />
            </div>
        );
    }
}

export default Timer;
