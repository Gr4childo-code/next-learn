import React from 'react';
import { AlertArray } from './Alert.dts';
import AlertUI from './AlertUI';

type Props = {};

const Alert = (props: Props) => {
	return <AlertUI AlertArray={AlertArray} />;
};

export default Alert;
