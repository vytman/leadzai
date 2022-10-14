import { Toggle } from '@components';
import React from 'react';
import { StyledContainer } from './style';

export const Weather = () => {
	const [isOn, setIsOn] = React.useState(false);
	console.log(isOn);

	return (
		<StyledContainer>
			<Toggle
				name="TemperatureToggle"
				isOn={isOn}
				onChange={e => setIsOn(!isOn)}
				labels={[{ text: 'ºC' }, { text: 'ºF' }]}
			/>
		</StyledContainer>
	);
};
