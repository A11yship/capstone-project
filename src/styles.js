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
		--light-color: #fcf8ee;
  		--light-accent: #bfbfee;
  		--brand-color: #90f;
  		--dark-accent: #501e71;
  		--dark-color: #3d0066;
		--succes: #358835;
		--danger: #f44336
	}

	html {
		font-size: 62.5%;
	}

	body {
		background-color: var(--light-color);
		color: var(--dark-color);
  		font-size: 1.6rem;

	}
`;
