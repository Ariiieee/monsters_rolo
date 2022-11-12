import {Component} from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
	render() {
		return (
			<div>
				<input
					className={`search-box ${this.props.className}`}
					type={this.props.type}
					placeholder={this.props.placeholder}
					onChange={this.props.onChangeHandler}
				/>
			</div>
		);
	}
}

export default SearchBox;

//the "type= search" automatically adds the close button  to erase input values when we click on the "x" icon and makes our search field a search input
