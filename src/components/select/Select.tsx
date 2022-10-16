import React from 'react';
import { ActionMeta, GroupBase, OptionsOrGroups } from 'react-select';
import { StyledSelect } from './styles';

interface SelectProps {
	options: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
	onChange?: ((newValue: unknown, actionMeta: ActionMeta<unknown>) => void) | undefined;
	value?: unknown;
}

export const Select: React.FC<SelectProps> = props => {
	const { options, onChange, value } = props;
	return <StyledSelect classNamePrefix="react-select" options={options} onChange={onChange} value={value} />;
};
