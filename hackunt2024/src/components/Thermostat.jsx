import React, { useState } from 'react';
import './thermostat.css';

const Thermostat = () => {
    const [temperature, setTemperature] = useState(70);

    const increaseTemperature = () => {
        const newTemperature = temperature + 1;
        setTemperature(newTemperature);
        checkTemperature(newTemperature);
    };

    const decreaseTemperature = () => {
        const newTemperature = temperature - 1;
        setTemperature(newTemperature);
        checkTemperature(newTemperature);
    };

    const checkTemperature = (temp) => {
        if (temp > 75 || temp < 65) {
            alert(`Warning: Temperature is now ${temp}°F, which is outside the safe range!`);
        }
    };

    return (
        <div className="thermostat">
            <h2>Current Temperature: {temperature}°F</h2>
            <div className="buttons">
                <button onClick={increaseTemperature}>Increase</button>
                <button onClick={decreaseTemperature}>Decrease</button>
            </div>
        </div>
    );
};

export default Thermostat;
