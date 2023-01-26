import Link from 'next/link';
import React from 'react';
import { TButtonArray } from './Button.dts';

type Props = {
	ButtonArray: Array<TButtonArray>;
};

const ButtonUI = (props: Props) => {
	return (
		<>
			<div className='container'>
				{props.ButtonArray.map((i, index) =>
					i.href ? (
						<Link href={i.href} key={index}>
							<label className={`btn btn-${i.color}`} key={index}>
								<input type={i.type} value={i.text} />
							</label>
						</Link>
					) : i.type === 'checkbox' || i.type === 'radio' ? (
						<label className={`btn btn-${i.color}`} key={index}>
							<input type={i.type} /> {i.text}
						</label>
					) : (
						<label className={`btn btn-${i.color}`} key={index}>
							<input type={i.type} value={i.text} />
						</label>
					)
				)}
			</div>
		</>
	);
};

export default ButtonUI;
