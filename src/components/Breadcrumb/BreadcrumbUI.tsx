import { TnavbarArray } from '../Navbar/navbar.dts';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
	navbarArray: Array<TnavbarArray>;
};

const BreadcrumbUI = (props: Props) => {
	const router = useRouter();

	// {props.navbarArray.map((i, index) => (
	// 	<li key={index} className='nav-item '>
	// 		<Link
	// 			className={router.pathname === i.link ? 'nav-link active' : 'nav-link'}
	// 			href={i.link}
	// 		>
	// 			{i.title}
	// 		</Link>
	// 	</li>
	// ))}
	return (
		<div className='container'>
			{props.navbarArray.map((i, index) =>
				router.pathname === '/' && i.title === 'Main' ? (
					<nav aria-label='breadcrumb' key={index}>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item active' aria-current='page'>
								{i.title}
							</li>
						</ol>
					</nav>
				) : router.pathname === '/news' && i.title === 'News' ? (
					<nav aria-label='breadcrumb' key={index}>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<Link href='/'>Home</Link>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								{i.title}
							</li>
						</ol>
					</nav>
				) : router.pathname === '/alert' && i.title === 'Alert' ? (
					<nav aria-label='breadcrumb' key={index}>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<Link href='/'>Home</Link>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								{i.title}
							</li>
						</ol>
					</nav>
				) : router.pathname === '/button' && i.title === 'Button' ? (
					<nav aria-label='breadcrumb' key={index}>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<Link href='/'>Home</Link>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								{i.title}
							</li>
						</ol>
					</nav>
				) : router.pathname === '/card' && i.title === 'Card' ? (
					<nav aria-label='breadcrumb' key={index}>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<Link href='/'>Home</Link>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								{i.title}
							</li>
						</ol>
					</nav>
				) : (
					''
				)
			)}
		</div>
	);
};

export default BreadcrumbUI;
