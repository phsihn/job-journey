import React from 'react';
import FeatureCard from '../feature_card/feature_card';
import { Link } from 'react-router-dom';

// material ui
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

// material ui style
const styles = (theme) => ({
	root: {
		margin: 0,
	},
	mainBackgroundImage: {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://source.unsplash.com/UI81cov4gSY/3000x2000')`,
		height: '500px',
		margin: 0,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		fontSize: '4rem',
		[theme.breakpoints.down('sm')]: {
			height: 300,
			fontSize: '3em',
		},
	},
	titleText: {
		margin: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.5em',
		},
	},
	featureContainers: {
		paddingTop: theme.spacing(3),
	},
	featureContainerTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
});

class MainPage extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Box className={classes.mainBackgroundImage}>
					<Grid
						container
						justify='center'
						alignItems='center'
						direction='column'
					>
						<Grid item>
							<Typography variant='h3' className={classes.titleText}>
								Organize your search
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant='h6' className={classes.titleText}>
								Help direct all yoru energy into one area for jobs something
								lorem
							</Typography>
						</Grid>
						<Grid item>
							<ButtonGroup
								color='inherit'
								aria-label='text primary button group'
								className={classes.sessionButtons}
							>
								<Button component={Link} to='/signup'>
									Sign up
								</Button>
								<Button component={Link} to='/login'>
									&nbsp;Login&nbsp;
								</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
				</Box>
				<Container maxWidth='lg' className={classes.featuresContainer}>
					<Box display='flex' alignItems='center' justifyContent='center'>
						<Typography variant='h4' className={classes.featureContainerTitle}>
							Features
						</Typography>
					</Box>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<FeatureCard />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(MainPage);
