import Image from 'next/image';
import { TCardArray } from './Card.dts';

type Props = {
	CardArray: Array<TCardArray>;
};

const CardUI = (props: Props) => {
	return (
		<div className='container'>
			{props.CardArray.map((i, index) => (
				<div className='card' style={{ width: '18rem' }} key={index}>
					<Image src={i.src} className='card-img-top' alt={i.title} width={250} height={300} />
					<div className='card-body'>
						<h5 className='card-title'>{i.title}</h5>
						<p className='card-text'>{i.text}</p>
						<a href='#' className='btn btn-primary'>
							Переход куда-нибудь
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardUI;
