import React from 'react';
import { StyledLoader } from './style';

export interface LoaderProps {
	isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
	return <StyledLoader isLoading={isLoading} />;
};
