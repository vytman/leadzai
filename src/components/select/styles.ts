import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
	width: 140px;
	& > .react-select__control {
		border-radius: 0;

		box-shadow: 0 0 0 1px rgb(204, 204, 204);
		border-color: rgb(204, 204, 204);

		.react-select__indicator-separator {
			display: none;
		}
		&:hover {
			border-color: rgb(204, 204, 204);
		}
	}

	& > .react-select__control--is-focused {
		border-color: rgb(204, 204, 204);
	}

	& .react-select__menu {
		border-radius: 0;
		margin: 0;
	}
`;
