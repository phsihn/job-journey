import React from 'react';

// material ui
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	root: {},
	card: {
		//backgroundColor: theme.palette.secondary.light,
		backgroundColor: 'rgba(229, 115, 115, .3)',
	},
	companyName: {
		...theme.typography.button,
		//backgroundColor: 'rgba(229, 115, 115, .2)',
		//padding: theme.spacing(1),
		fontWeight: 800,
	},
	pos: {
		fontWeight: 600,
		marginBottom: 12,
	},
	textBackground: {
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
	},
});

class JobCard extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card} variant='outlined'>
				<CardContent>
					<Typography
						className={classes.companyName}
						variant='h6'
						component='h6'
					>
						{this.props.company}
					</Typography>
					<Typography className={classes.pos} color='textSecondary'>
						{this.props.position}
					</Typography>
					<Typography variant='body2' component='p'>
						{this.props.location}
					</Typography>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(JobCard);
