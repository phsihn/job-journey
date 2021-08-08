import React, { Component } from 'react';

// material ui
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';

// material ui style
const styles = (theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	form: {
		margin: theme.spacing(3),
	},
	submitButton: {
		marginTop: theme.spacing(2),
	},
	formControl: {
		width: '100%',
	},
});

class JobForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			_id: this.props._id,
			company: this.props.company,
			position: this.props.position,
			location: this.props.location,
			status: this.props.status,
			postUrl: this.props.postUrl,
			description: this.props.description,
			notes: this.props.notes,
			contacts: this.props.contacts,
			addOrEditOrView: this.props.addOrEditOrView,
		};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			_id: nextProps._id,
			company: nextProps.company,
			position: nextProps.position,
			location: nextProps.location,
			status: nextProps.status,
			postUrl: nextProps.postUrl,
			description: nextProps.description,
			notes: nextProps.notes,
			contacts: nextProps.contacts,
			addOrEditOrView: nextProps.addOrEditOrView,
		});
	}

	// job form functions
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.props.addOrEditOrView === 'add') {
			let job = {
				company: this.state.company,
				position: this.state.position,
				location: this.state.location,
				status: this.state.status,
				postUrl: this.state.postUrl,
				description: this.state.description,
				notes: this.state.notes,
				contacts: this.state.contacts,
			};

			this.props.composeJob(job);

			this.setState({
				company: '',
				position: '',
				location: '',
				status: this.props.status,
				postUrl: '',
				description: '',
				notes: '',
				contacts: '',
				errors: {},
			});
		} else if (this.props.addOrEditOrView === 'edit') {
			let job = {
				_id: this.props._id,
				company: this.state.company,
				position: this.state.position,
				location: this.state.location,
				status: this.state.status,
				postUrl: this.state.postUrl,
				description: this.state.description,
				notes: this.state.notes,
				contacts: this.state.contacts,
			};
			console.log(job);
			this.props.editJob(job);

			this.setState({
				_id: this.props._id,
				company: this.state.company,
				position: this.state.position,
				location: this.state.location,
				status: this.state.status,
				postUrl: this.state.postUrl,
				description: this.state.description,
				notes: this.state.notes,
				contacts: this.state.contacts,
				errors: {},
			});
		}

		this.props.setModalClose();
	};

	updateSelected = (event) => {
		this.setState(() => {
			return {
				status: event.target.value,
			};
		});
	};

	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	addOrEditOrViewModal = () => {
		const { classes } = this.props;

		if (this.props.addOrEditOrView === 'view') {
			return (
				<Dialog
					fullWidth
					maxWidth='xl'
					open={this.props.open}
					onClose={this.props.setModalClose}
				>
					<DialogTitle>View Job</DialogTitle>
					<DialogContentText>
						<form className={classes.form}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										variant='filled'
										required
										fullWidth
										id='company'
										label='Company'
										value={this.state.company}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant='filled'
										required
										fullWidth
										id='position'
										label='Position'
										name='position'
										autoComplete='position'
										value={this.state.position}
										className={classes.disabledTextColor}
									/>
								</Grid>
								<Grid item xs={12} sm={8}>
									<TextField
										variant='filled'
										fullWidth
										id='location'
										label='Location'
										name='location'
										autoComplete='location'
										value={this.state.location}
										className={classes.disabledTextColor}
									/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<FormControl variant='filled' className={classes.formControl}>
										<InputLabel fullWidth required>
											Status
										</InputLabel>
										<Select
											defaultValue={this.props.status}
											fullWidth
											label='Status'
											value={this.state.status}
										>
											<MenuItem value={'Applied'}>Applied</MenuItem>
											<MenuItem value={'Interview'}>Interview</MenuItem>
											<MenuItem value={'Offer'}>Offer</MenuItem>
											<MenuItem value={'Rejected'}>Rejected</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={8}>
									<TextField
										variant='filled'
										fullWidth
										name='postUrl'
										label='Post Url'
										type='postUrl'
										id='postUrl'
										autoComplete='post-url'
										value={this.state.postUrl}
										className={classes.disabledTextColor}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										variant='filled'
										fullWidth
										name='contacts'
										label='Contact(s)'
										type='contacts'
										id='contacts'
										autoComplete='contacts'
										value={this.state.contacts}
										className={classes.disabledTextColor}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='filled'
										fullWidth
										multiline
										rows={7}
										name='description'
										label='Description'
										type='description'
										id='description'
										autoComplete='description'
										value={this.state.description}
										className={classes.disabledTextColor}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='filled'
										fullWidth
										multiline
										rows={7}
										name='notes'
										label='Notes'
										type='notes'
										id='notes'
										autoComplete='notes'
										value={this.state.notes}
										className={classes.disabledTextColor}
									/>
								</Grid>
							</Grid>
							<Button
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submitButton}
								onClick={this.props.setModalClose}
							>
								Close
							</Button>
						</form>
					</DialogContentText>
				</Dialog>
			);
		} else {
			return (
				<Dialog
					fullWidth
					maxWidth='md'
					open={this.props.open}
					onClose={this.props.setModalClose}
				>
					<DialogTitle>Job Information</DialogTitle>
					<DialogContentText>
						<form className={classes.form} onSubmit={this.handleSubmit}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='company'
										name='company'
										variant='outlined'
										required
										fullWidth
										id='company'
										label='Company'
										value={this.state.company}
										onChange={this.update('company')}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='position'
										label='Position'
										name='position'
										autoComplete='position'
										value={this.state.position}
										onChange={this.update('position')}
									/>
								</Grid>
								<Grid item xs={12} sm={8}>
									<TextField
										variant='outlined'
										fullWidth
										id='location'
										label='Location'
										name='location'
										autoComplete='location'
										value={this.state.location}
										onChange={this.update('location')}
									/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<FormControl
										variant='outlined'
										className={classes.formControl}
									>
										<InputLabel required fullWidth>
											Status
										</InputLabel>
										<Select
											fullWidth
											label='Status'
											value={this.state.status}
											onChange={this.updateSelected}
										>
											<MenuItem value={'Applied'}>Applied</MenuItem>
											<MenuItem value={'Interview'}>Interview</MenuItem>
											<MenuItem value={'Offer'}>Offer</MenuItem>
											<MenuItem value={'Rejected'}>Rejected</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={8}>
									<TextField
										variant='outlined'
										fullWidth
										name='postUrl'
										label='Post Url'
										type='postUrl'
										id='postUrl'
										autoComplete='post-url'
										value={this.state.postUrl}
										onChange={this.update('postUrl')}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										variant='outlined'
										fullWidth
										name='contacts'
										label='Contact(s)'
										type='contacts'
										id='contacts'
										autoComplete='contacts'
										value={this.state.contacts}
										onChange={this.update('contacts')}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										fullWidth
										multiline
										rows={7}
										name='description'
										label='Description'
										type='description'
										id='description'
										autoComplete='description'
										value={this.state.description}
										onChange={this.update('description')}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										fullWidth
										multiline
										rows={7}
										name='notes'
										label='Notes'
										type='notes'
										id='notes'
										autoComplete='notes'
										value={this.state.notes}
										onChange={this.update('notes')}
									/>
								</Grid>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submitButton}
							>
								{this.props.addOrEditOrView}
							</Button>
						</form>
					</DialogContentText>
					<DialogActions>
						<Button onClick={this.props.setModalClose} color='primary'>
							Cancel
						</Button>
					</DialogActions>
				</Dialog>
			);
		}
	};

	render() {
		return <React.Fragment>{this.addOrEditOrViewModal()}</React.Fragment>;
	}
}

JobForm.propTypes = {};

export default withStyles(styles)(JobForm);
