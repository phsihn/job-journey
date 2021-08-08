import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { Link } from 'react-router-dom';

export const mainListItems = (
	<div>
		<ListItem button component={Link} to='/home' color='inherit'>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary='Job Board' />
		</ListItem>
		<ListItem button component={Link} to='/about' color='inherit'>
			<ListItemIcon>
				<InfoIcon />
			</ListItemIcon>
			<ListItemText primary='About' />
		</ListItem>
		<ListItem button color='inherit'>
			<ListItemIcon>
				<HourglassEmptyIcon />
			</ListItemIcon>
			<ListItemText primary='Coming Soon...' />
		</ListItem>
	</div>
);
