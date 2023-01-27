import Pagination from '@/components/Pagination/Pagination';
import Rating from '@/components/Rating/Rating';

type Props = {};

const index = (props: Props) => {
	return (
		<div className='container'>
			<Rating maxStar={4} countStar={0} />
			<div className='py-5'>
				<Pagination countArticles={35} limits={10} />
			</div>
		</div>
	);
};

export default index;
