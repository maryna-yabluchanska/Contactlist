import data from "../mock-data.json"

function ContactList(props) {
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        // else {
        //     return el.text.toLowerCase().includes(props.input)
        // }
    })
    return (
        <ul>
            {filteredData}
            {data.map((person) => (
                <li key={person.name}>
                    <p><strong>{person.name} </strong></p>
                    <p>Phone: {person.phone}</p>
                    <p>Email: {person.email}</p>
                    <p>Address: {person.address} </p>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;