import { TnavbarArray } from '@/pages';
import Link from 'next/link';
import style from './Navbar.module.css';

type Props = {
	navbarArray: Array<TnavbarArray>;
};

const Navbar = (props: Props) => {
	return (
		<div className={style.navbar}>
			<ul>
				{props.navbarArray.map((el, index: number) => (
					<li key={index}>
						<strong>{el.title}, </strong>
						<Link href={el.link}>{el.link}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
