import React from 'react';
import PropTypes from 'prop-types';
import NavBarContainer from '../nav/navbar_container';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	appBarSpacer: theme.mixins.toolbar,
	container: {
		paddingTop: theme.spacing(9),
		paddingBottom: theme.spacing(9),
	},
	subtitleText: {
		paddingTop: theme.spacing(2),
	},
	techStackPaper: {
		backgroundColor: 'rgba(63, 81, 181)',
	},
	aboutMePaper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		backgroundColor: 'rgba(235, 235, 235)',
	},
	aboutMeText: {
		color: 'black',
		paddingTop: theme.spacing(7),
	},
	theAppGrid: {
		padding: theme.spacing(2),
	},
	techStackTitle: {
		color: 'white',
		padding: theme.spacing(1),
	},
	techStackItem: {
		color: 'white',
	},
	aboutMeButton: {
		margin: theme.spacing(1),
	},
	divider: {
		margin: theme.spacing(4),
	},
}));

export default function AboutPage() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<NavBarContainer />
			<div className={classes.content}>
				<div className={classes.appBarSpacer}>
					<Container maxwidth='lg' className={classes.container}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label='simple tabs example'
							indicatorColor='primary'
							textColor='primary'
							centered
						>
							<Tab label='The App' {...a11yProps(0)} />
							<Tab label='FAQ' {...a11yProps(1)} />
							<Tab label='About Me' {...a11yProps(2)} />
						</Tabs>
						<TabPanel value={value} index={0}>
							<Grid container>
								<Grid item xs={12} className={classes.theAppGrid}>
									<Typography variant='h3' color='primary'>
										About Job Journey
									</Typography>
									<Typography variant='h6' className={classes.subtitleText}>
										Job Journey attempts to centralize all the applications into
										one location. It makes it easier to view and keep track of
										the progress of each job application to give the user an
										organized and straightforward approach.
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6} className={classes.theAppGrid}>
									<Paper elevation={3} className={classes.techStackPaper}>
										<Typography variant='h3' className={classes.techStackTitle}>
											Tech Stack
										</Typography>
										<Grid container>
											<Grid item xs={12} sm={6}>
												<List>
													<ListItem className={classes.techStackItem}>
														Mongo DB
													</ListItem>
													<ListItem className={classes.techStackItem}>
														Express
													</ListItem>
													<ListItem className={classes.techStackItem}>
														React
													</ListItem>
													<ListItem className={classes.techStackItem}>
														Node.js
													</ListItem>
												</List>
											</Grid>
											<Grid item xs={12} sm={6}>
												<List>
													<ListItem className={classes.techStackItem}>
														Redux
													</ListItem>
													<ListItem className={classes.techStackItem}>
														Passport.js
													</ListItem>
													<ListItem className={classes.techStackItem}>
														Material UI
													</ListItem>
													<ListItem className={classes.techStackItem}>
														Heroku
													</ListItem>
												</List>
											</Grid>
										</Grid>
									</Paper>
								</Grid>
							</Grid>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography className={classes.heading}>
										Why was Job Journey created?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										This application was first built because of my unorganized
										attempt at job searching. I was quickly copying small
										snippets of job postings that I applied to on an unorganized
										Google Document or Excel Sheet. I quickly realized how
										confusing and chaotic it was becoming, especially the more
										postings I came across. I could have just been more
										organized in my job search but I thought it would be a cool
										opportunity to learn a new tech stack and create some
										practical solution that my friends and I could also use.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography className={classes.heading}>
										Will additional features be released?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Honestly, I don't know. Hopefully. Maybe?
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography className={classes.heading}>
										What if I find a bug?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										If you find a bug on the app, please email me at
										phsihn@gmail.com
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography className={classes.heading}>
										I don't like __________.
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>Nice.</Typography>
								</AccordionDetails>
							</Accordion>
						</TabPanel>
						<TabPanel value={value} index={2}>
							<Grid container>
								<Grid item xs={12} textAlign='center'>
									<Paper className={classes.aboutMePaper}>
										<Typography variant='h3' className={classes.aboutMeText}>
											Hey, I'm Patrick <SentimentVerySatisfiedIcon />
										</Typography>
										<Typography variant='h5' className={classes.aboutMeText}>
											I like to learn and do things.
										</Typography>
										<Divider variant='middle' className={classes.divider} />
										<Button
											className={classes.aboutMeButton}
											variant='contained'
											color='primary'
											startIcon={<LinkedInIcon />}
											href='https://www.linkedin.com/in/patrick-sihn-81b747123/'
										>
											LinkedIn
										</Button>
										<Button
											className={classes.aboutMeButton}
											variant='contained'
											color='primary'
											startIcon={<GitHubIcon />}
											href='https://github.com/phsihn'
										>
											GitHub
										</Button>
										<Button
											className={classes.aboutMeButton}
											variant='contained'
											color='primary'
											startIcon={<EmailIcon />}
											href='mailto:phsihn@gmail.com'
										>
											Email
										</Button>
									</Paper>
								</Grid>
							</Grid>
						</TabPanel>
					</Container>
				</div>
			</div>
		</div>
	);
}
