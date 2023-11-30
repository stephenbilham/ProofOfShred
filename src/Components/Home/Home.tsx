import { Container } from "react-bootstrap";

import CardContainer from "../CardContainer/CardContainer";
import CardSlider from "../CardSlider/CardSlider";

const Home = () => {
	return (
		<Container
			fluid
			style={{
				padding: "2rem",
				display: "flex",
				flexDirection: "column",
				gap: "80px",
			}}>
			<div
				style={{
					fontFamily: '"Montserrat", sans-serif',
					fontWeight: 300,
					color: "white",
					fontSize: "32px",
				}}>
				Top Clips <br />
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/O797q2WZx9g?autoplay=1&mute=1&loop=1&playlist=O797q2WZx9g" // loop=1 afeer &mute
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				/>
				{`                                                        `}
				{/* <iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/wpHCaO-R6p0?autoplay=1&mute=1&playlist=wpHCaO-R6p0"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				/> */}
			</div>
			{/* trending slider probably better name */}
			<CardSlider />
			<CardContainer />
		</Container>
	);
};

export default Home;
