import React from 'react';
import JobFormContainer from '../job_form/job_form_container';

// material ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
	deleteButton: {
		marginLeft: 'auto',
	},
});

class JobCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			addOrEditOrView: '',
		};
	}

	setModalOpenView = () => {
		this.setState({ open: true, addOrEditOrView: 'view' });
		console.log(this.state);
	};

	setModalOpenEdit = () => {
		this.setState({ open: true, addOrEditOrView: 'edit' });
		console.log(this.state);
	};

	setModalClose = () => {
		this.setState({ open: false });
	};
	deleteJob = () => {
		console.log(this.props._id);
		this.props.removeJob(this.props._id);
	};

	render() {
		const { classes } = this.props;

		return (
			<Card raised className={classes.card} variant='outlined'>
				<CardHeader
					avatar={
						<Avatar aria-label='Company'>{this.props.company.charAt(0)}</Avatar>
					}
					title={this.props.company}
					subheader={this.props.position}
				></CardHeader>
				<CardActions disableSpacing>
					<IconButton onClick={this.setModalOpenView}>
						<VisibilityIcon fontSize='small' />
					</IconButton>
					<IconButton onClick={this.setModalOpenEdit}>
						<EditIcon fontSize='small' />
					</IconButton>
					<IconButton onClick={this.deleteJob} className={classes.deleteButton}>
						<DeleteIcon fontSize='small' />
					</IconButton>
				</CardActions>
				<JobFormContainer
					open={this.state.open}
					addOrEditOrView={this.state.addOrEditOrView}
					setModalClose={this.setModalClose}
					_id={this.props._id}
					company={this.props.company}
					position={this.props.position}
					location={this.props.location}
					status={this.props.status}
					postUrl={this.props.postUrl}
					description={this.props.description}
					notes={this.props.notes}
					contacts={this.props.contacts}
				/>
			</Card>
		);
	}
}

export default withStyles(styles)(JobCard);
