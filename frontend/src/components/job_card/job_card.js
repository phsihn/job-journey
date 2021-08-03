import React from 'react';

// material ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
	root: {},
	card: {
		//backgroundColor: theme.palette.secondary.light,
		backgroundColor: 'rgba(229, 115, 115, .4)',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
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
	deleteJob = () => {
		console.log(this.props.id);
		this.props.removeJob(this.props.id);
	};

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card} variant='outlined'>
				<CardHeader
					avatar={
						<Avatar aria-label='Company'>{this.props.company.charAt(0)}</Avatar>
					}
					title={this.props.company}
					subheader={this.props.position}
					action={
						<IconButton onClick={this.deleteJob}>
							<DeleteIcon fontSize='small' />
						</IconButton>
					}
				></CardHeader>
			</Card>
		);
	}
}

export default withStyles(styles)(JobCard);
