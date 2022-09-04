import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:root {
		--light-color: #f9f2dd;
  		--light-accent: #daf;
  		--brand-color: #90f;
  		--dark-accent: #5b2281;
  		--dark-color: #1a1a34;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-size: 1.6rem;
	}
`;
