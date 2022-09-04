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
		font-family: 'Tillana', cursive;
		font-size: 62.5%;
	}

	body {
		background-color: var(--light-color);
		color: var(--dark-color);
  		font-size: 1.6rem;

	}

	/* tillana-regular - latin */
	@font-face {
		font-family: 'Tillana';
  		font-style: normal;
		font-weight: 400;
  		src: url('/fonts/tillana-v11-latin-regular.eot'); /* IE9 Compat Modes */
  		src: local(''),
       		url('/fonts/tillana-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      		 url('/fonts/tillana-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       		url('/fonts/tillana-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
       		url('/fonts/tillana-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       		url('/fonts/tillana-v11-latin-regular.svg#Tillana') format('svg'); /* Legacy iOS */
	}

	/* tillana-700 - latin */
	@font-face {
  		font-family: 'Tillana';
  		font-style: normal;
  		font-weight: 700;
  		src: url('/fonts/tillana-v11-latin-700.eot'); /* IE9 Compat Modes */
  		src: local(''),
       		url('/fonts/tillana-v11-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       		url('/fonts/tillana-v11-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       		url('/fonts/tillana-v11-latin-700.woff') format('woff'), /* Modern Browsers */
       		url('/fonts/tillana-v11-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       		url('/fonts/tillana-v11-latin-700.svg#Tillana') format('svg'); /* Legacy iOS */
	}

`;
