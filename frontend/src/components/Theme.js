import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FF8A60';

export default createMuiTheme({
	palette: {
		common: {
			blue: `${arcBlue}`,
			orange: `${arcOrange}`,
		},
		primary: {
			main: `${arcBlue}`,
		},
		secondary: {
			main: `${arcOrange}`,
		},
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1rem',
		},
		estimate: {
			fontFamily: 'Pacifico',
			fontSize: '1rem',
			textTransform: 'none',
			color: 'white',
		},
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: `${arcBlue}`,
			lineHeight: 1.5,
		},
		h4: {
			fontFamily: 'Raleway',
			fontSize: '1.75rem',
			color: `${arcBlue}`,
			fontWeight: 700,
		},
	},
});
