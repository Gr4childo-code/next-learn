import Image from 'next/image';
import style from './Header.module.css';

type Props = {
	img: string;
	title: string;
};

const Header = (props: Props) => {
	return (
		<div className={style.header}>
			<div>
				<Image src={props.img} alt={'img header'} height={100} width={100} />
			</div>
			<div>
				<h3 className=''>{props.title}</h3>
			</div>
		</div>
	);
};

export default Header;
