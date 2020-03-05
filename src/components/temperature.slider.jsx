import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { updateTemperatureRange } from '../store/actions/actions'

function valuetext(value) {
  return `${value}°C`;
}

function RangeSlider({ temperature, updateTemperatureRange }) {
	const [value, setValue] = React.useState(temperature.temperatureRange);

  const handleChange = (event, newValue) => {
		setValue(() => {
			updateTemperatureRange(newValue);

			return newValue
		});
  };

	return (
    <>
      <Typography id="range-slider" gutterBottom>
        Температура
      </Typography>
      <Slider
				min={temperature.defaultValues.min}
				step={temperature.defaultValues.step}
				max={temperature.defaultValues.max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
	temperature: state.temperature
});

const mapDispatchToProps = {
	updateTemperatureRange
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider);
