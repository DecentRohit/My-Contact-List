# My-Contact-List
created contact list app using react which fetches contacts from an API

*I used Redux toolkit for creating store which stores the contacts initial state.
*Data in store is fetched using CreateAsyncThunk function so that fetch call is made using reducer itself and no need to call from components.
*contacts can be edited, deleted and Added as per need.
*React toast is used for stylish notification alert on every changes to contact list.
*Navbar title has link to list page, so clicking on it will return to main page.
*Edit Contact and Add contact have seperate route path for convenience 
