import { Col, Container, Row } from "react-bootstrap";
import surfingImage from "../../assets/images/surfing.jpeg";
import skateboardingImage from "../../assets/images/skating.jpeg";
import basketballImage from "../../assets/images/basketball.jpeg";
import styles from "./CardSlider.module.scss";
import CardContent from "../CardContainer/Card/Card";

const CardContainer = () => {
	// Array of objects representing your hardcoded data
	const cards = [
		{
			id: 5,
			title: "Basketball",
			year: "2023",
			type: "Sport",
			image: basketballImage,
		},
		{
			id: 1,
			title: "Skating",
			year: "2023",
			type: "Sport",
			image: skateboardingImage,
		},
		{
			id: 2,
			title: "Surfing",
			year: "2023",
			type: "Sport",
			image: surfingImage,
		},
	];

	return (
		<Container fluid>
			<Row className="mb-4">
				<Col>
					<div className={styles.trendingNowText}>Trending now</div>
				</Col>
			</Row>
			{/* Cards */}
			<Row xs={1} md={2} lg={3} className=" justify-content-start">
				{cards.map((card) => (
					<Col
						key={card.id}
						className={`d-flex align-items-stretch ${styles.animation}`}>
						<CardContent
							title={card.title}
							year={card.year}
							type={card.type}
							image={card.image}
							trendingView
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default CardContainer;
