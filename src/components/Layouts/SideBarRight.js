import React      from 'react';
import Pagination from 'react-js-pagination';

export const SideBarRightForPagination = (props) => {
	return (
		<nav className={'center'}>
			{console.log('props', props)}
			<Pagination
				activePage={props.pageDate.activePage}
				totalItemsCount={props.pageDate.totalPages}
				pageRangeDisplayed={5}
				onChange={props.pageDate.pageChanger}
			/>
		</nav>
	);
};