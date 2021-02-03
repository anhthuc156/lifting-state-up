import React from 'react';
import { toCelsius, toFahrenheit, tryConvert } from '../util/functional';
import CalculatorInput from './CalculatorInput';
import BoilingVerdict from './BoilingVerdict';

class Calcalator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'f'
        }
    }

    render() {
        const { temperature } = this.state;
        const { scale } = this.state;
        const celcius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        const handleCelciusChange = (temperature) => {
            
            this.setState(
                {
                    scale: 'c',
                    temperature
                }
            )
        }

        const handleFahrenheitChange = (temperature) => {
            
            this.setState(
                {
                    scale: 'f',
                    temperature
                }
            )
        }

        return(
            <>
                <CalculatorInput
                    scale="c"
                    temperature = {celcius}
                    onTemperatureChange={(temperature) => handleCelciusChange(temperature)}/>
                <CalculatorInput
                    scale="f"
                    temperature = {fahrenheit}
                    onTemperatureChange={(temperature) => handleFahrenheitChange(temperature)}/>
                <BoilingVerdict
                    celsius={parseFloat(celcius)}
                />
            </>
        )
    }
}

export default Calcalator;