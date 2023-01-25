import React from 'react';

type Props = {};

const Footer = (props: Props) => {
	let year = new Date().getFullYear();

	return (
		<div>
			<p> @copyright все права защищены {year} год.</p>
		</div>
	);
};

export default Footer;
