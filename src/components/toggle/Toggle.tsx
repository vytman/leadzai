import React from 'react';
import styles from './toggle.module.css';

interface ToggleProps {
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isOn: boolean;
	labels: [Label, Label];
}
interface Label {
	text: string;
}

export const Toggle: React.FC<ToggleProps> = props => {
	const { name, onChange, isOn, labels } = props;
	const { switchCheckbox, switchLabel, switchButton, container, labelName } = styles;
	const { '0': firstLabel, '1': secondLabel } = labels;

	return (
		<>
			<div className={container}>
				<label className={labelName}>{firstLabel.text}</label>
				<input
					className={switchCheckbox}
					id={name}
					type="checkbox"
					value={isOn ? secondLabel.text : firstLabel.text}
					onChange={onChange}
				/>
				<label className={switchLabel} htmlFor={name}>
					<span className={switchButton} />
				</label>
				<label className={labelName}>{secondLabel.text}</label>
			</div>
		</>
	);
};
