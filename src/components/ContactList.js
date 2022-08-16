import data from "../mock-data.json"

function ContactList(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((person) => (
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