type Props = {
	maxStar: number;
	countStar: number;
};

const RatingUI = (props: Props) => {
	const allStar = [];
	let ErorrString: string = '';
	if (props.countStar > props.maxStar) {
		ErorrString = 'Выбранных звезд больше, чем основных';
	} else if (props.countStar < props.maxStar) {
		let PropsMaxStar = props.maxStar - props.countStar;
		for (let index = 0; index < props.countStar; index++) {
			allStar.push(<i key={Math.random()} className='bi bi-star-fill'></i>);
		}
		console.log(allStar);

		for (let index = 0; index < PropsMaxStar; index++) {
			allStar.push(
				<i
					key={Math.random()}
					className='bi bi-star'
					onClick={() => {
						console.log(index);
					}}
				></i>
			);
		}
	}

	return (
		<>
			{allStar}
			{ErorrString}
		</>
	);
};

export default RatingUI;
