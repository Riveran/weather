import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import ItemCard from './item.card';
import { deleteItem } from '../store/actions/actions';
import { getDashboardDataByFilter } from '../store/selectors/dashboard.selector';

function Dashboard({dashboardData, deleteItem}) {
	if(!dashboardData.length) {
		return (
			<Grid container item justify='center' alignItems='center' style={{minHeight: '500px'}}>
				Нет данных для отображения.
			</Grid>
			)
	}

	function onDeleteClick (id) {
		deleteItem(id)
	}

	function getListCard () {
		const listCard = dashboardData.map((item) => (
			<ItemCard key={item.id} item={item} onDeleteClick={onDeleteClick}/>
		))
		return listCard;
	}

	return (
		<Grid container item spacing={2}>
			{getListCard()}
		</Grid>
	)
}

const mapStateToProps = (state) => ({
	dashboardData: getDashboardDataByFilter(state)
})

const mapDispatchToProps = {
	deleteItem
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);