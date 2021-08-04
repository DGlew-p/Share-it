import styled from 'styled-components';

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 2rem;
	height: 40vh;
  width: 80vw;
		margin: auto;
		max-width: 50%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
	 text-transform: uppercase;
  letter-spacing: 0.4rem;
		  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
				margin: auto;
				max-width: 50%;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
				margin: auto;
				max-width: 50%;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
				margin: auto;
				max-width: 50%;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
				margin: auto;
				max-width: 50%;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 60vh	;	
				margin: auto;
				max-width: 50%;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 60vh;
					margin: auto;
				max-width: 50%;
  }
`;

export const Input = styled.input.attrs((props) => ({
	// we can define static props
	type: 'text',

	// or we can define dynamic ones
	size: props.size || '1em',
}))`
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
 height: 10%;
  

	/* here we use the dynamically computed prop */
	margin: ${(props) => props.size};
	padding: ${(props) => props.size};
`;
 
 
	export const Button = styled.button`
	 width: 150px;  height: 50px;  color: #fff; background-color: #125182;
 text-align: center;  font-size: 30px;  line-height: 50px;
 
 
 /*gradient styles*/
 background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #125182), color-stop(.5, #1269ab), color-stop(.51, #004375), to(#00345b));
 background: -moz-linear-gradient(top, #125182, #1269ab 50%, #004375 51%, #00345b);  
 
 /*border styles*/
 -moz-border-radius: 30px;
 -webkit-border-radius: 30px;
 border-radius: 30px;
 
 -moz-box-shadow:inset 0 0 10px #000000;
 -webkit-box-shadow:inset 0 0 10px #000000;
 box-shadow:inset 0 0 10px #000000;
}
 
 
.button p {
 font-size: 20px;
 line-height: 20px;
 font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
 font-weight: 300;
 text-shadow: 0px 0px 3px #555;
 
}
 
a {
 text-decoration: none;
 color: fff;
}

 
.button:hover {
 -moz-box-shadow:inset 0 0 50px #000000;
 -webkit-box-shadow:inset 0 0 50px #000000;
 box-shadow:inset 0 0 50px #000000;
}
 
.button p:hover {
 text-shadow: 0px 0px 3px #888;

 `

/* export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;




`;

export const  HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export const  IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`; */

