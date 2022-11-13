import {Component} from "react";
import Card from "../card/card";
import "./card__list.styles.css";

class CardList extends Component {
	render() {
		const {monsters} = this.props;
		return (
			<div className="card__list">
				{monsters.map((monster) => {
					return <Card monster={monster} />;
				})}
			</div>
		);
	}
}

export default CardList;

//components rerenders based on two conditions:
// -when setstate is called and when props are updated
