import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CodeBlock from './CodeBlock';
const useStyles = makeStyles(() => ({
	title: {
		fontSize: '50px',
		fontWeight: 'bold',
	},
	mainContainer: {
		paddingTop: '10em',
	},
	boxContainer: {
		textAlign: 'center',
	},
}));

const codeText = `fetch('https://mysite/api')
    .then(response => response.json())
    .then(quote => console.log(quote))`;

const codeOutput = `{
	"quote": "Trying is the first step toward failure.",
	"author": "Homer Simpson",
}`;

function Home() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='md' className={classes.mainContainer}>
				<Box className={classes.boxContainer}>
					<Typography className={classes.title}>
						Demotivational Quotes API
					</Typography>
					<Typography>free RESTful API service</Typography>
				</Box>
				<Typography>API Endpoints</Typography>
				<CodeBlock codeText={codeText} codeOutput={codeOutput} />
			</Container>
		</React.Fragment>
	);
}

export default Home;
