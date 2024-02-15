import React from 'react';
import { RouterProvider , createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './store';

import  Navbar  from './components/Navbar';
import List  from './pages/List'
import Edit from './pages/EditContact';
import AddContact from './pages/AddContact';


function App() {
  //created routes for different pages
  const router = createBrowserRouter([
{path: "/", element: <Navbar />, children: [
              {index: true, element: <List /> },
              { path: "Addcontact", element: <AddContact/> },
              { path: "Edit/:id", element: <Edit /> }
            ]
          }
          ])

return(
    <>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </>
)
}
export default App;
