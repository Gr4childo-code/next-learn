import { TAlertArray } from './Alert.dts';

type Props = { AlertArray: Array<TAlertArray> };

const AlertUI = (props: Props) => {
	return (
		<div className='container'>
			{props.AlertArray.map((i, index) => (
				<div key={index} className={`alert alert-${i.color}`} role='alert'>
					<span>{i.text}</span>
				</div>
			))}
		</div>
	);
};

export default AlertUI;
