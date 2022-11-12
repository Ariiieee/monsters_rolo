import {Component} from "react";
import "./card__list.styles.css";
import "./card.styles.css";

class CardList extends Component {
	render() {
		const {monsters} = this.props;
		return (
			<div className="card__list">
				{monsters.map((monster) => {
					const {id, name, email} = monster;
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
				})}
			</div>
		);
	}
}

export default CardList;

//components rerenders based on two conditions:
// -when setstate is called and when props are updated
