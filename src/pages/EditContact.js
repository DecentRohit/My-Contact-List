import { Link, useNavigate, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { contactSelector } from "../redux/reducers/contactReducer";
import { actions } from "../redux/reducers/contactReducer";
import { useState } from "react";
import "./style.css"

export default function Edit() {
    const { id } = useParams(); //take id of contact from url
    const navigate = useNavigate();
    const { contacts } = useSelector(contactSelector); //destructured contacts which gives access to state in reducer
    const dispatch = useDispatch();
    // creating copy of contact which is getting edited 
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    const [Name, setName] = useState(currentContact.name);
    const [Email, setEmail] = useState(currentContact.email);
    const [Phone, setPhone] = useState(currentContact.phone);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContacts = contacts.map(contact =>
            contact.id === parseInt(id)
                ? { ...contact, name: Name, email: Email, phone: Phone }
                : contact
        );

        //pushing current contact back in state after editing
        dispatch(actions.contacts(updatedContacts));
        toast.success('🦄 Contact Modified Successfully', {
            position: "top-right" , autoClose:1500})
            //navigating back to home page after edit 
        navigate('/');
    };

    return (
        <div className='col-md-6 shadow mx-auto p-5'>
            <form className='text-center' onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='form-control'
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-group mb-3'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='form-control'
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group mb-3'>
                    <input
                        type='number'
                        placeholder='Phone Number'
                        className='form-control'
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='form-group mb-3'>
                    <button className="submit-button" type='submit'>Update Contact</button>
                    <Link to='/' className='btn btn-danger ms-3'>Cancel</Link>
                </div>
            </form>
        </div>
    );
}
