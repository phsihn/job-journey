import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material ui
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
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
			company: '',
			position: '',
			location: '',
			status: '',
			description: '',
			notes: '',
			contacts: '',
			open: false,
			newJob: {},
		};
	}

	componentWillMount() {
		console.log(this.props.currentUser);
	}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.newJob);
		this.setState({ newJob: nextProps.newJob });
		console.log(this.state.newJob);
	}

	componentWillUpdate(nextProps, nextState) {}

	componentDidUpdate(prevProps, prevState) {}

	componentWillUnmount() {}

	setOpen = (open) => {
		this.setState({ open: open });
	};

	handleClickOpen = () => {
		this.setOpen(true);
	};

	handleClose = () => {
		this.setOpen(false);
	};

	// job form functions
	handleSubmit = (e) => {
		e.preventDefault();
		let job = {
			company: this.state.company,
			position: this.state.position,
			location: this.state.location,
			postUrl: this.state.postUrl,
			status: this.state.status,
			description: this.state.description,
			notes: this.state.notes,
			contacts: this.state.contacts,
		};

		this.props.composeJob(job);
		this.setState({
			company: '',
			position: '',
			location: '',
			status: '',
			description: '',
			notes: '',
			contacts: '',
			errors: {},
		});
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

	render() {
		const { classes } = this.props;
		return (
			<div>
				<IconButton onClick={this.handleClickOpen}>
					<AddIcon />
				</IconButton>
				<Dialog
					fullWidth
					maxWidth='md'
					open={this.state.open}
					onClose={this.handleClose}
				>
					<DialogTitle>Add Job</DialogTitle>
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
										<InputLabel fullWidth>Status</InputLabel>
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
										rowMax={7}
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
										rowMax={7}
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
								Add
							</Button>
						</form>
					</DialogContentText>
					<DialogActions>
						<Button onClick={this.handleClose} color='primary'>
							Cancel
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

JobForm.propTypes = {};

export default withStyles(styles)(JobForm);
