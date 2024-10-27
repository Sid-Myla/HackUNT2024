import React, { useState } from 'react';
import './SectorPreview.css';

// Dummy Thermostat component
const Thermostat = () => {
    return <div className="thermostat">Thermostat Component: Adjust your temperature settings here.</div>;
};

const SectorPreview = ({ sector }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="sector-preview">
            <div>
            <h3>{sector}</h3>
            <p>Temperature: 75°F</p>
            <p>Occupants: 15</p>
            <p>Utilities: OK</p>
            <p>Area: 1000 ft²</p>
            </div>
            <div className='select'>
                <h4>Select a measurement:</h4>
                <label>
                    <input
                        type="radio"
                        value="Lighting"
                        checked={selectedOption === 'Lighting'}
                        onChange={handleChange}
                    />
                    Lighting
                </label>
                <label>
                    <input
                        type="radio"
                        value="Temperature"
                        checked={selectedOption === 'Temperature'}
                        onChange={handleChange}
                    />
                    Temperature
                </label>
                <label>
                    <input
                        type="radio"
                        value="Power"
                        checked={selectedOption === 'Power'}
                        onChange={handleChange}
                    />
                    Power
                </label>
            </div>

            <div>
                {selectedOption === 'Temperature' && <Thermostat />}
            </div>
        </div>
    );
};

export default SectorPreview;
