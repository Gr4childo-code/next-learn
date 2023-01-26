import Image from 'next/image';
import Navbar from '../Navbar/Navbar';

type Props = {
	img: string;
	title: string;
};

const Header = (props: Props) => {
	return (
		<div className='container'>
			<Navbar />
			{/* 
			<div>
				<Image src={props.img} alt={'img header'} height={100} width={100} />
			</div>

			<div>
				<h6 className=''>{props.title}</h6>
			</div> */}
		</div>
	);
};

export default Header;
