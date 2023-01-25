import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';

export type TnavbarArray = {
	title: string;
	link: string;
};

type Props = {};

const index = (props: Props) => {
	const navbarArray: Array<TnavbarArray> = [
		{
			title: 'News',
			link: '/news',
		},
		{
			title: 'About',
			link: '/about',
		},
		{
			title: 'Main',
			link: '/',
		},
	];
	return (
		<>
			<div>
				<Header img='/image/Header_img.jpg' title='Учение Next js' />
				<Navbar navbarArray={navbarArray} />
			</div>
		</>
	);
};

export default index;
