import PaginationUI from './PaginationUI';

type Props = {
	countArticles: number;
	limits: number;
};

const Pagination = (props: Props) => {
	return <PaginationUI countArticles={props.countArticles} limits={props.limits} />;
};

export default Pagination;
