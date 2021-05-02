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
		h1: {
			fontSize: '4rem',
		},
		codeSubtitle: {
			fontSize: '2em',
		},
	},
});
