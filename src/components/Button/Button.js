import StyledButton from './StyledButton';

export default function Button({children, type = 'button', ...props}) {
	return (
		<StyledButton type={type} {...props}>
			{children}
		</StyledButton>
	);
}
