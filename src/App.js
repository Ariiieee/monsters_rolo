import "./App.css";
import {Component} from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

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
				<SearchBox
					className="monster_search__box"
					type="search"
					placeholder="search monsters"
					onChangeHandler={onSearchChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;

//anonymous function is a function that is not stored anywhere in a variable
//creating methods in renders are for optimization
// a component governs a piece of the ui - ties together visual representation and functional representation of the ui

//props are properties,
//"this" actually references the actual class component itself
