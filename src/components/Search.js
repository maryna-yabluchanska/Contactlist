import {Component} from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({
            input: event.target.value.toLowerCase()
        })
    }
    render() {
        // const filter=;
        return(
            <div>
                <h1>Search:</h1>
                <input type="search" placeholder="Search" onChange={this.handleChange}/>
                <p>{this.state.input}</p>
            </div>
        );
    }
}

export default Search;