import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import ItemCard from './item.card';
import { deleteItem } from '../store/actions/actions';

function Dashboard({dashboardData: {data}, deleteItem}) {
	if(!data.length) {
		return (
			<Grid container item justify='center'>
				Don't have data for view
			</Grid>
			)
	}

	function onDeleteClick (id) {
		deleteItem(id)
	}

	function getListCard () {
		const listCard = data.map(item => (
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
	dashboardData: state.dashboard
})

const mapDispatchToProps = {
	deleteItem
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);