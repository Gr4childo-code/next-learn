import { CardArray } from './Card.dts';
import CardUI from './CardUI';

type Props = {};

const Card = (props: Props) => {
	return (
		<div>
			<CardUI CardArray={CardArray} />
		</div>
	);
};

export default Card;
