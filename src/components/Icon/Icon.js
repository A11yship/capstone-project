const icons = {
	delete: {
		path: 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z',
		alt: ' Aufgabe löschen',
	},
	edit: {
		path: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
		alt: 'Aufgabe bearbeiten',
	},
	play: {path: 'M8,5.14V19.14L19,12.14L8,5.14Z', alt: 'Timer starten'},
	break: {path: 'M14,19H18V5H14M6,19H10V5H6V19Z', alt: 'Timer pausieren'},
	done: {
		path: 'M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z',
		alt: 'Aufgabe ist erledigt',
	},
	add: {path: 'M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z', alt: 'Aufgabe hinzufügen'},
	list: {
		path: 'M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z',
		alt: 'Aufgabenliste',
	},
};

export default function Icon({variant, size = '24px', color = 'currentColor'}) {
	return (
		<svg style={{width: size, height: size}} viewBox="0 0 24 24" role="img">
			<title>{icons[variant].alt}</title>
			<path fill={color} d={icons[variant].path} />
		</svg>
	);
}
