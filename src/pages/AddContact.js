import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSelector, postContacts } from "../redux/reducers/contactReducer";
import { useNavigate } from "react-router-dom";
import "./style.css"


export default function Addcontact() {
    const { contacts } = useSelector(contactSelector);//destructured contacts which gives access to state in reducer
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //create a new object of contact details to be added
        const newContact = {
            id: contacts.length + 1,
            name,
            email,
            phone
        };

        //dispatching newly added contact to the state for updating
        dispatch(postContacts(newContact));
        //navigating back to list page after updation 
        navigate('/');
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Number"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
}
