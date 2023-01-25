import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import { navbarArray } from '../Navbar/navbar.dts';

type Props = {
	img: string;
	title: string;
};

const Header = (props: Props) => {
	return (
		<div className={''}>
			<Navbar navbarArray={navbarArray} />

			{/* <div>
				<Image src={props.img} alt={'img header'} height={100} width={100} />
			</div> */}

			<div>
				<h3 className=''>{props.title}</h3>
			</div>
		</div>
	);
};

export default Header;
