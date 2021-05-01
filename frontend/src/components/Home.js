import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	title: {
		fontSize: '50px',
		fontWeight: 'bold',
	},
	mainContainer: {
		paddingTop: '10em',
		textAlign: 'center',
	},
}));

function Home() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='md' className={classes.mainContainer}>
				<Box>
					<Typography className={classes.title}>
						Demotivational Quotes API
					</Typography>
					<Typography>free RESTful API service</Typography>
				</Box>
				<Box></Box>
			</Container>
		</React.Fragment>
	);
}

export default Home;
