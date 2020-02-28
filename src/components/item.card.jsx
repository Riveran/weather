import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Delete } from '@material-ui/icons';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: '35%',
	}
});


export default function ItemCard({item, onDeleteClick}) {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={3}>
			<Card>
				<CardHeader
					action={
						<IconButton onClick={() => { onDeleteClick(item.id) }}>
							<Delete />
						</IconButton>
					}
					title={item.city}
				/>
				<Grid container justify='space-around' alignItems='center' wrap='nowrap'>
					<CardMedia
						classes={{
							img: classes.img
						}}
						component="img"
						image={item.image}
						title="item.city"
					/>
					<Typography variant="h4" gutterBottom display='inline'>
						{item.temperature}<sup><small>°</small></sup>
					</Typography>
				</Grid>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{`Скорость ветра: ${item.wind}`}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{`Давление: ${item.atmospherePressure}`}
					</Typography>
      </CardContent>
			</Card>
		</Grid>
	)
}
