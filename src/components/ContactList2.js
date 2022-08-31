import data from "../mock-data.json"
import React from 'react'

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsToShow: 3,
            expanded: false
        };
        this.showMore = this.showMore.bind(this);
    }
    showMore() {
        this.state.itemsToShow === 3 ? (
            this.setState({ itemsToShow: data.length, expanded: true })
        ) : (
            this.setState({ itemsToShow: 3, expanded: false })
        )
    }
    render() {

       const filteredData =
            data.filter((el) => {
                if (this.props.input === '') {
                    return el;
                }
                else {
                    return el.name.toLowerCase().includes(this.props.input)
                }
            })
        return (
            <div>
                <ul>
                    {filteredData.slice(0,this.state.itemsToShow).map((person) => (
                        <li key={person.name}>
                            <p><strong>{person.name} </strong></p>
                            <p>Phone: {person.phone}</p>
                            <p>Email: {person.email}</p>
                            <p>Address: {person.address} </p>
                        </li>
                    ))}
                </ul>
                <button onClick={this.showMore}>{this.state.expanded ? (
                    <span>Show less</span>
                ) : (
                    <span>Show more</span>
                )
                }</button>
            </div>
        );
    }
};

export default ContactList