import React from 'react';

const Timer = () => (
    <div className="container has-text-centered">
        <h3 className="title is-2">
            Pomodoro Timer
        </h3>
        <h4 className="subtitle is-4">25:00</h4>
        <div className="buttons is-centered">
            <a className="button is-success is-outlined">Start</a>
            <a className="button is-danger is-outlined">Stop</a>
        </div>
    </div>
);

export default Timer;