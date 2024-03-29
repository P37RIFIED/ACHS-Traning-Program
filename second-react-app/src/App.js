import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList';
import { useState } from 'react';
import MovieDetail from './MovieName';

import { Link, Route, Routes } from 'react-router-dom';
import AddContact from './CreateContact';


const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  }
};
const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"

  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
  }
];



function App() {
  const dataObj = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"

      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      }
    ]
  };

const [state, setState] = useState(dataObj);

console.log(useState(dataObj))

const removeContact = (contact) => {
  setState((prevState) => ({
    contacts: prevState.contacts.filter((c) => {
      return c.id !== contact.id;
    })
  }))
}


  return (
    <div>
      <Routes>
        <Route path='/' element={<ContactList contacts={state.contacts} onDeleteContacts={removeContact} />} />
        <Route path='/AddContact' element = {<AddContact/>}/>
      </Routes>


    </div>
  );
}

export default App;
