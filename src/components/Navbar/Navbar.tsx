import Link from 'next/link';
import { TnavbarArray } from './navbar.dts';
import { navbarArray } from '../Navbar/navbar.dts';

import NavbarUI from './NavbarUI';

type Props = {};

const Navbar = (props: Props) => {
	return <NavbarUI navbarArray={navbarArray} />;
};

export default Navbar;
