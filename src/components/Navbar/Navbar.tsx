import Link from 'next/link';
import { TnavbarArray } from './navbar.dts';

type Props = {
	navbarArray: Array<TnavbarArray>;
};

const Navbar = (props: Props) => {
	return (
		<div className={''}>
			<ul>
				{props.navbarArray.map((el, index: number) => (
					<li key={index}>
						<strong>{el.title}, </strong>
						<Link href={el.link}>{el.link}</Link>
					</li>
				))}
			</ul>
		</div>
		// <div>
		// 	<nav aria-label='breadcrumb'>
		// 		<ol className='breadcrumb'>
		// 			<li className='breadcrumb-item active' aria-current='page'>
		// 				Home
		// 			</li>
		// 		</ol>
		// 	</nav>

		// 	<nav aria-label='breadcrumb'>
		// 		<ol className='breadcrumb'>
		// 			<li className='breadcrumb-item'>
		// 				<a href='#'>Home</a>
		// 			</li>
		// 			<li className='breadcrumb-item active' aria-current='page'>
		// 				Library
		// 			</li>
		// 		</ol>
		// 	</nav>

		// 	<nav aria-label='breadcrumb'>
		// 		<ol className='breadcrumb'>
		// 			<li className='breadcrumb-item'>
		// 				<a href='#'>Home</a>
		// 			</li>
		// 			<li className='breadcrumb-item'>
		// 				<a href='#'>Library</a>
		// 			</li>
		// 			<li className='breadcrumb-item active' aria-current='page'>
		// 				Data
		// 			</li>
		// 		</ol>
		// 	</nav>
		// </div>
	);
};

export default Navbar;
