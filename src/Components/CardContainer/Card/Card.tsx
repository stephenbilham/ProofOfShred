import React from "react";
import { Card, Button } from "react-bootstrap";
import { CardContainerProps } from "../sharedCardTypes";
import cx from "clsx";
import styles from "./Card.module.scss";

const CardContent = ({
	title,
	year,
	type,
	image,
	trendingView,
}: CardContainerProps) => {
	return (
		<Card className={styles.cardContent}>
			<Card.Img
				variant="top"
				src={image}
				className={cx(styles.cardImage, {
					[styles.trendingViewImage]: trendingView,
				})}
			/>
			<Card.Body
				className={cx(styles.cardBody, {
					[styles.trendingView]: trendingView,
				})}>
				<div>
					{!trendingView && (
						<Card.Text className={styles.cardText}>
							{year} · {type}
						</Card.Text>
					)}
					<Card.Title as="h6">{title}</Card.Title>
				</div>

				{!trendingView && (
					<Button variant="primary" className={styles.cardButton}>
						<Card.Text>Rank Clips</Card.Text>
					</Button>
				)}
			</Card.Body>
		</Card>
	);
};

export default CardContent;
