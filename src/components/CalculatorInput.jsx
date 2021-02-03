import React from 'react';

import * as constants from '../util/constants';

const scaleNames = {
    c: constants.CELSIUS,
    f: constants.FAHRENHEIT
};

class CalculatorInput extends React.Component {

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const { temperature } = this.props ;
        const { scale } = this.props;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={(e) => this.handleChange(e)}
                />
            </fieldset>
            
        )
    }
}

export default CalculatorInput;