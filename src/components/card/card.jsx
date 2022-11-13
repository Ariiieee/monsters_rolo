import {Component} from "react";
import "./card.styles.css";

class Card extends Component {
	render() {
		const {id, name, email} = this.props.monster;
		return (
			<div className="card__container" key={id}>
				<img
					src={`https://robohash.org/${id}?set=set4&size=100x100`}
					alt={name}
				/>
				<h1 key={id}>{name}</h1>
				<p>{email}</p>
			</div>
		);
	}
}

export default Card;
