import React from 'react';
import { withRouter } from 'react-router-dom';

// material ui
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockOpenIcon from '@material-ui/icons/LockOpen';

// material ui style
const styles = (theme) => ({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	submitButton: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(2),
	},
	signupPaper: {
		textAlign: 'center',
		margin: theme.spacing(12),
		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
			marginTop: theme.spacing(10),
		},
	},
	signupTextField: {
		marginTop: theme.spacing(2),
	},
});

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			password2: '',
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearedErrors = false;
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.signedIn === true) {
			this.props.history.push('/login');
		}

		this.setState({ errors: nextProps.errors });
	}

	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};

		this.props.signup(user, this.props.history);
	}

	renderErrors() {
		return (
			<div>
				<Divider variant='middle' />

				{Object.keys(this.state.errors).map((error, i) => (
					<Typography key={`error-${i}`}>{this.state.errors[error]}</Typography>
				))}
			</div>
		);
	}

	render() {
		const { classes } = this.props;

		return (
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
			>
				<Grid item xs={12} sm={6} lg={3}>
					<Paper className={classes.signupPaper} elevation={10}>
						<form onSubmit={this.handleSubmit} className={classes.root}>
							<div>
								<LockOpenIcon />
							</div>
							<div>
								<Typography variant='h5'>Sign Up</Typography>
							</div>
							<TextField
								id='outlined-basic'
								label='First Name'
								variant='outlined'
								type='text'
								value={this.state.firstName}
								onChange={this.update('firstName')}
								fullWidth
								required
								className={classes.signupTextField}
							/>
							<TextField
								id='outlined-basic'
								label='Last Name'
								type='text'
								variant='outlined'
								value={this.state.lastName}
								onChange={this.update('lastName')}
								fullWidth
								required
								className={classes.signupTextField}
							/>
							<TextField
								id='outlined-basic'
								label='Email'
								type='text'
								variant='outlined'
								value={this.state.email}
								onChange={this.update('email')}
								fullWidth
								required
								className={classes.signupTextField}
							/>
							<TextField
								id='outlined-basic'
								label='Password'
								type='password'
								variant='outlined'
								value={this.state.password}
								onChange={this.update('password')}
								fullWidth
								required
								className={classes.signupTextField}
							/>
							<TextField
								id='outlined-basic'
								label='Confirm Password'
								type='password'
								variant='outlined'
								value={this.state.password2}
								onChange={this.update('password2')}
								fullWidth
								required
								className={classes.signupTextField}
							/>
							<Button
								type='submit'
								value='Submit'
								variant='contained'
								color='primary'
								fullWidth
								className={classes.submitButton}
							>
								Submit
							</Button>
							{this.renderErrors()}
						</form>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

export default withRouter(withStyles(styles)(SignupForm));
