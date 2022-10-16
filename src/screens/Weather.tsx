import { Loader, Select, Toggle } from '@components';
import { Url } from '@constants';
import { getFormatedSunriseAndSunset, getTemperatureInConrrectUnits } from '@helpers';
import React, { useEffect } from 'react';
import { axiosCountry } from 'services';
import {
	StyledContainer,
	StyledIconContainer,
	StyledInputContainer,
	StyledOutputCOnatiner,
	StyledSunContainer,
	StyledTemperature,
} from './style';

interface WeatherState {
	temperature: string;
	units: string;
	icon: string;
	sunrise: string;
	sunset: string;
}

interface Country {
	value: string;
	label: string;
}

export const Weather = () => {
	const countryOptions = [
		{ value: 'lisbon', label: 'Lisbon' },
		{ value: 'new+york', label: 'New York' },
		{ value: 'london', label: 'London' },
	];
	const [isToggleOn, setIsToggleOn] = React.useState<boolean>(false);
	const [country, setCountry] = React.useState<Country>(countryOptions[0]);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [weather, setWeather] = React.useState<WeatherState>({
		temperature: '-',
		units: 'ºC',
		icon: '',
		sunrise: '-',
		sunset: '-',
	});
	const [tempInKelvin, setTempInKelvin] = React.useState<number>(0);

	const { icon, sunrise, sunset, temperature, units } = weather;
	const handleOnChangeUnits = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsToggleOn(!isToggleOn);
		const temperature = getTemperatureInConrrectUnits(e.target.value, tempInKelvin);

		setWeather({
			...weather,
			units: e.target.value,
			temperature: tempInKelvin ? temperature : weather.temperature,
		});
	};

	const handleOnChangeCountry = (data: unknown) => {
		const country = data as Country;
		setIsLoading(true);
		setCountry(country as any);
		const countryData = data as Country;
		axiosCountry
			.get(`&q=${countryData.value}`)
			.then(response => {
				setWeatherOutput(response.data);
			})
			.catch(err => console.log(err))
			.finally(() => {
				setIsLoading(false);
			});
	};

	const setWeatherOutput = (data: any) => {
		const tempInKelvin = data?.main?.temp;
		const temperature = getTemperatureInConrrectUnits(weather.units, tempInKelvin);
		const icon = data.weather?.[0]?.icon;
		const iconUrl = `${Url.IMAGE}${icon}@2x.png`;
		const timezone = data?.timezone;
		const sunrise = data?.sys?.sunrise;
		const sunset = data?.sys?.sunset;
		const { formatedSunrise, formatedSunset } = getFormatedSunriseAndSunset(sunrise, sunset, timezone);
		setTempInKelvin(tempInKelvin);
		setWeather({
			...weather,
			icon: iconUrl,
			temperature,
			sunrise: formatedSunrise,
			sunset: formatedSunset,
		});
	};

	useEffect(() => {
		handleOnChangeCountry(countryOptions[0]);
	}, []);

	return (
		<>
			<StyledContainer>
				<StyledInputContainer>
					<Select options={countryOptions} onChange={handleOnChangeCountry} value={country} />
					<Toggle
						name="TemperatureToggle"
						isOn={isToggleOn}
						onChange={handleOnChangeUnits}
						labels={[{ text: 'ºC' }, { text: 'ºF' }]}
					/>
				</StyledInputContainer>
				<StyledOutputCOnatiner>
					<StyledTemperature>
						{temperature} {units}
					</StyledTemperature>
					<StyledIconContainer>{icon && <img src={icon} alt="Weather" />}</StyledIconContainer>
					<StyledSunContainer>
						<div>Sunrise: {sunrise}</div>
						<div>Sunset: {sunset}</div>
					</StyledSunContainer>
				</StyledOutputCOnatiner>
			</StyledContainer>
			<Loader isLoading={isLoading} />
		</>
	);
};
