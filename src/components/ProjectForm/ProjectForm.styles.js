import styled from 'styled-components';

export const Wrapper = styled.form`
	width: 70%;
	margin: 0 auto;
	max-width: 800px;
	margin-top: 3rem;
`;

export const FormLabel = styled.label`
	color: #fbe095;
`;

// export const Input = styled.input.attrs((props) => ({
// 	// we can define static props
// 	type: 'text',

// 	// or we can define dynamic ones
// 	size: props.size || '1em',
// }))`
// 	color: palevioletred;
// 	font-size: 1em;
// 	border: 2px solid palevioletred;
// 	border-radius: 3px;

// 	/* here we use the dynamically computed prop */
// 	margin: ${(props) => props.size};
// 	padding: ${(props) => props.size};
// `;
