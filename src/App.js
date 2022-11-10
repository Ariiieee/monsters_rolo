import "./App.css";
import {Component} from "react";
import CardList from "./components/card-list/CardList";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return {
							monsters: users,
							searchField: "",
						};
					},
					() => {
						console.log(this.state);
					}
				)
			);
	}

	onSearchChange = (e) => {
		const searchField = e.target.value.toLocaleLowerCase();
		this.setState(() => {
			return {searchField};
		});
	};

	render() {
		//destructuring
		const {monsters, searchField} = this.state;
		const {onSearchChange} = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<input
					type="search-box"
					placeholder="search monsters"
					onChange={onSearchChange}
				/>
				{/* {filteredMonsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})} */}
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;

//anonymouse function is a function that is not stored anywhere in a variable
//creating methods in renders are for optimization
// a component governs a piece of the ui - ties together visual representation and functional representation of the ui

//props are properties,
//"this" actually references the actual class component itself
