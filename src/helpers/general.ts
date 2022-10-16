import moment from 'moment';

export const getCelciusAndFahrenheit = (tempInKelvin: number) => {
	return {
		tempInC: Math.ceil(tempInKelvin - 273.15),
		tempInF: Math.ceil(1.8 * (tempInKelvin - 273) + 32),
	};
};

export const getTemperatureInConrrectUnits = (units: string, tempInKelvin: number) => {
	const tempData = getCelciusAndFahrenheit(tempInKelvin);
	const { tempInC, tempInF } = tempData;
	return units === 'ºC' ? tempInC.toString() : tempInF.toString();
};

export const getFormatedSunriseAndSunset = (sunrise: number, sunset: number, timezone: number) => {
	const formatedSunrise = moment.utc(sunrise, 'X').add(timezone, 'seconds').format('HH:mm');
	const formatedSunset = moment.utc(sunset, 'X').add(timezone, 'seconds').format('HH:mm');

	return {
		formatedSunrise,
		formatedSunset,
	};
};
