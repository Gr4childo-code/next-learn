type Props = {
	countArticles: number;
	limits: number;
};

const PaginationUI = (props: Props) => {
	let countPage = props.countArticles / props.limits;
	countPage.toFixed();

	const page = [];
	let currentPage = 1;

	for (let index = 0; index < countPage; index++) {
		page.push(
			<li key={Math.random()} className='page-item'>
				<a className='page-link' href='#'>
					{currentPage++}
				</a>
			</li>
		);
	}

	return (
		<div>
			<nav aria-label='Page navigation example'>
				<ul className='pagination'>
					<li className='page-item'>
						<a className='page-link' href='#'>
							Previous
						</a>
					</li>
					{page}
					<li className='page-item'>
						<a className='page-link' href='#'>
							Next
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default PaginationUI;
