import { useEffect } from "react"
import "./style.css"
import { Link } from "react-router-dom";
import Delete from "./Delete";
import { useDispatch, useSelector } from "react-redux";
import { contactSelector } from "../redux/reducers/contactReducer";
import { getInitialState } from "../redux/reducers/contactReducer";


function List() {

  const { isLoading, contacts, error } = useSelector(contactSelector); //destructuring initial state values from contact-Reducer


  const dispatch = useDispatch();


  useEffect(() => {
    //fetch contacts only when initial state of contacts is empty
    if (!contacts.length > 0) {
      dispatch(getInitialState())
    }
  }, [])

  if (isLoading) {
    return <div className="message">Loading...</div>;
  }

//show error if cant able to fetch from API
  if (error) {
   return <div class="alert alert-danger" role="alert">
      Failed to fetch contacts
    </div>
  }
 //return card of contacts which edit and delete button
  return (
    <>
    

      <h1>contacts</h1>

      {contacts.map((cont) => (
        <div className="list" key={cont.id}>
          <img src="https://cdn-icons-png.flaticon.com/128/8143/8143259.png" alt="contact logo"></img>
          <h5>{cont.name}</h5>
          <h5>{cont.email}</h5>
          <h5>{cont.phone}</h5>

          <Link to={`/Edit/${cont.id}`}><button >Edit</button></Link>

          <Delete id={cont.id} />

        </div>
      ))}
    </>
  );
}

export default List;