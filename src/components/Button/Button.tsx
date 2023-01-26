import React from 'react';
import { ButtonArray } from './Button.dts';
import ButtonUI from './ButtonUI';

type Props = {};

const Button = (props: Props) => {
	return (
		<div>
			<ButtonUI ButtonArray={ButtonArray} />
		</div>
	);
};

export default Button;
