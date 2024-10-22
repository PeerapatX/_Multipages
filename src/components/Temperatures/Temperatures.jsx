import Variable from '../Variable/Variable';
import './Temperatures.css';
import { useState } from 'react';

function Temperatures() {

    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState(77);
    const [kelvin, setKelvin] = useState(298.15);


    const calCelsius = (newCelsius) => {
        setCelsius(newCelsius);
        setFahrenheit((newCelsius * 9 / 5) + 32);
        setKelvin(newCelsius + 273.15);
    };

    const calFahrenheit = (newFahrenheit) => {
        setFahrenheit(newFahrenheit);
        setCelsius((newFahrenheit - 32) * 5 / 9);
        setKelvin((newFahrenheit - 32) * 5 / 9 + 273.15);
    };

    const calKelvin = (newKelvin) => {
        setKelvin(newKelvin);
        setCelsius(newKelvin - 273.15);
        setFahrenheit((newKelvin - 273.15) * 9 / 5 + 32);
    };

    return (
        <div className='temperatures-container'>
            <h3 className='temperatures-title'>Temperatures</h3>
            <h3 className='temperatures-number'>
                <span className='badge bg-primary'>{celsius.toFixed(2)} °C</span>
                <span className='badge bg-primary'>{fahrenheit.toFixed(2)} °F</span>
                <span className='badge bg-primary'>{kelvin.toFixed(2)} K</span>
            </h3>
            <div className='temperatures-variable'>
                <Variable type={'int'} name={'Celsius'} value={celsius} setValue={calCelsius} />
                <Variable type={'int'} name={'Fahrenheit'} value={fahrenheit} setValue={calFahrenheit} />
                <Variable type={'int'} name={'Kelvin'} value={kelvin} setValue={calKelvin} />
            </div>
        </div>
    );
}

export default Temperatures;
