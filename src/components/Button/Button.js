export default function Button({children, type = 'button'}) {
	return <button type={type}>{children}</button>;
}
