import {Component} from "react";
import ContactList from "./ContactList";


class ContactSection extends Component {
    render() {
        return(
            <div>
                <h1>Contacts:</h1>
                <ContactList/>
            </div>
        );
    }
}

export default ContactSection;