import React, { useState } from "react";
import AddContact from "./Components/AddContact";
import ContactCard from "./Components/ContactCard";
import ContactList from "./Components/ContactList";

function App() {
  let [allContacts, setAllContacts] = useState([]);
  let [modal, setModal] = useState(false);
  let [editTodo, setEditTodo] = useState({});

  function addContact(newContact) {
    setAllContacts([...allContacts, newContact]);
  }

  function deleteContact(id) {
    let arr = [...allContacts];
    arr = arr.filter((item) => {
      return item.id !== id;
    });
    setAllContacts(arr);
  }
  // console.log(allContacts);
  //
  //
  //
  //
  //
  function editContact(index) {
    setModal(true);
    setEditTodo(allContacts[index]); // передала все данные в edit
  }

  function handleSaveContact(newContact) {
    let newArr = allContacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setAllContacts(newArr);
    handleCloseModal();
  }
  function handleCloseModal() {
    setModal(false);
  }

  return (
    <div className="container">
      <AddContact addContact={addContact} />
      <ContactList
        allContacts={allContacts}
        deleteContact={deleteContact}
        editContact={editContact}
        handleCloseModal={handleCloseModal}
      />{" "}
      {modal ? (
        <ContactCard
          allContacts={allContacts}
          editTodo={editTodo}
          handleSaveContact={handleSaveContact}
        />
      ) : null}
    </div>
  );
}

export default App;
