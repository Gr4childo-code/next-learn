import RatingUI from './RatingUI';

type Props = {
	maxStar: number;
	countStar: number;
};

const Rating = (props: Props) => {
	return <RatingUI maxStar={props.maxStar} countStar={props.countStar} />;
};

export default Rating;
