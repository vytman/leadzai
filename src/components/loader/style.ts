import { LoaderProps } from '@components';
import styled from 'styled-components';

export const StyledLoader = styled.div`
	border: 16px solid #f3f3f3;
	border-radius: 50%;
	border-top: 16px solid #3498db;
	width: 120px;
	height: 120px;
	animation: spin 2s linear infinite;
	position: absolute;
	top: 50%;
	left: -webkit-calc(50% - 60px);
	left: -moz-calc(5% - 60px);
	left: calc(50%-60px);
	display: ${(props: LoaderProps) => (props.isLoading ? 'flex' : 'none')};
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
