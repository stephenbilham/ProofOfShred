import { Col, Container, Row } from "react-bootstrap";
import surfingImage from "../../assets/images/surfing.jpeg";
import skateboardingImage from "../../assets/images/skating.jpeg";
import snowboardingImage from "../../assets/images/snowboarding.jpeg";
import basketballImage from "../../assets/images/basketball.jpeg";
import footballImage from "../../assets/images/football.jpeg";
import CardContent from "./Card/Card";
import styles from "./CardContainer.module.scss";

const CardContainer = () => {
	// Array of objects representing your hardcoded data
	const cards = [
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
		{
			id: 3,
			title: "Snowboarding",
			year: "2019",
			type: "Sport",
			image: snowboardingImage,
		},
		// {
		// 	id: 4,
		// 	title: "Bmx",
		// 	year: "2023",
		// 	type: "Sport",
		// 	image: defaultImage,
		// },
		{
			id: 5,
			title: "Basketball",
			year: "2023",
			type: "Sport",
			image: basketballImage,
		},
		{
			id: 6,
			title: "Football",
			year: "2023",
			type: "Sport",
			image: footballImage,
		},
	];
	return (
		<Container fluid>
			<Row className="mb-4">
				<Col>
					<div className={styles.cardContainerTitleText}>Rank these sports</div>
				</Col>
			</Row>
			{/* Cards */}
			<Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-start">
				{cards.map((card) => (
					<Col
						key={card.id}
						className={`d-flex align-items-stretch ${styles.animation}`}>
						<CardContent
							title={card.title}
							year={card.year}
							type={card.type}
							image={card.image}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default CardContainer;
