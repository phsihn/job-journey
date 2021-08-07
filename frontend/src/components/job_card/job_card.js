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
import Typography from '@material-ui/core/Typography';

const styles = (theme, props) => ({
	root: {},
	card: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	companyName: {
		fontWeight: 800,
		color: 'white',
	},
	position: {
		fontWeight: 400,
		color: 'white',
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
	};

	setModalOpenEdit = () => {
		this.setState({ open: true, addOrEditOrView: 'edit' });
	};

	setModalClose = () => {
		this.setState({ open: false });
	};
	deleteJob = () => {
		this.props.removeJob(this.props._id);
	};

	render() {
		const { classes } = this.props;

		return (
			<Card
				raised
				className={classes.card}
				variant='outlined'
				style={{ backgroundColor: this.props.cardColor }}
			>
				<CardHeader
					avatar={
						<Avatar aria-label='Company'>{this.props.company.charAt(0)}</Avatar>
					}
					title={
						<Typography className={classes.companyName}>
							{this.props.company}
						</Typography>
					}
					subheader={
						<Typography className={classes.position}>
							{this.props.position}
						</Typography>
					}
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
