import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Pagination from '@/components/Pagination/Pagination';
import Rating from '@/components/Rating/Rating';

type Props = {};

const index = (props: Props) => {
	return (
		<div className='container'>
			<div>
				<Rating maxStar={5} countStar={4} />
			</div>

			<div className='py-5'>
				<Pagination countArticles={35} limits={10} />
			</div>
		</div>
	);
};

export default index;
