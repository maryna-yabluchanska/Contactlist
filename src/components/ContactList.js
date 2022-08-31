import data from "../mock-data.json"
import {React, useState} from "react";

function ContactList(props) {
    const [showMore, setShowMore] = useState(false)
    // const itemsToShow = useState(3);
    const itemsToShow = 3;
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })

   // showMoreNew () {
   //          this.state.itemsToShow === 3 ? (
   //              this.setState({ itemsToShow: this.state.cars.length, expanded: true })
   //          ) : (
   //              this.setState({ itemsToShow: 3, expanded: false })
   //          )
   //  };

    // function showMoreNew (){
    //     console.log(data.length);
    //     itemsToShow === data.length;
    //     // itemsToShow === 3 ? (
    //          //     this.setState({ itemsToShow: data.length, expanded: true })
    //          // ) : (
    //          //     this.setState({ itemsToShow: 3, expanded: false })
    //          // )
    //  };
    return (
        <div>
            <h6>
            {showMore ? data : `${data.slice(0,3)}`}
            {/*<button className="btn" onClick={()=>setShowMore(!showMore)}>Show more</button>*/}
            <button className="btn" onClick={showMoreNew}>Show more</button>
        </h6>
            <ul>
                {filteredData.slice(0,2).map((person) => (
                    <li key={person.name}>
                        <p><strong>{person.name} </strong></p>
                        <p>Phone: {person.phone}</p>
                        <p>Email: {person.email}</p>
                        <p>Address: {person.address} </p>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ContactList;