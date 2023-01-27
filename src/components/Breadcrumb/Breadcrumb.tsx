import React from 'react';
import BreadcrumbUI from './BreadcrumbUI';
import { navbarArray } from '../Navbar/navbar.dts';

type Props = {};

const Breadcrumb = (props: Props) => {
	return (
		<div>
			<BreadcrumbUI navbarArray={navbarArray} />
		</div>
	);
};

export default Breadcrumb;
