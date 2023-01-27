import Link from 'next/link';
import { useRouter } from 'next/router';

import { TnavbarArray } from './navbar.dts';

type Props = {
	navbarArray: Array<TnavbarArray>;
};

const NavbarUI = (props: Props) => {
	const router = useRouter();

	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						{props.navbarArray.map((i, index) => (
							<li key={index} className='nav-item '>
								<Link
									className={router.pathname === i.link ? 'nav-link active' : 'nav-link'}
									href={i.link}
								>
									{i.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavbarUI;
