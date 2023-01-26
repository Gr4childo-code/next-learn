import Image from 'next/image';

type Props = {};

const CardUI = (props: Props) => {
	return (
		<div className='container'>
			<div className='card' style={{ width: '18rem' }}>
				<Image src='...' className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>Название карточки</h5>
					<p className='card-text'>
						Some quick example text to build on the card title and make up the bulk of the card's
						content.
					</p>
					<a href='#' className='btn btn-primary'>
						Переход куда-нибудь
					</a>
				</div>
			</div>
		</div>
	);
};

export default CardUI;
