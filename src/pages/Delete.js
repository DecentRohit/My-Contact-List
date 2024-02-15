import { useDispatch, useSelector } from "react-redux";
import { contactSelector } from "../redux/reducers/contactReducer";
import { actions } from "../redux/reducers/contactReducer";
import "./style.css"
export default function Delete({ id }) {

  const { contacts } = useSelector(contactSelector);  //destructured contacts which gives access to state in reducer
  const dispatch = useDispatch();


  const handleDelete = () => {
    console.log(id)
    const set = (contacts.filter((x) => x.id !== id))
    dispatch(actions.contacts(set));  //sending filtered array to state for updating after delete
  }


  return (

    <button className="delete-button" onClick={() => handleDelete()}>Delete</button>

  )
}