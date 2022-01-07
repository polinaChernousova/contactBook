import React, { useState } from "react";

const AddContact = (props) => {
  let [contact, setContact] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");
  let [photo, setPhoto] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!photo) {
      return setPhoto(
        "https://img-fotki.yandex.ru/get/94189/127908635.1b63/0_1d1868_6397c6b7_orig.jpg"
      );
    }
    let newContacts = {
      contact,
      surname,
      phone,
      photo,
      id: Date.now(),
    };
    props.addContact(newContacts);
    setContact("");
    setSurname("");
    setPhone("");
    setPhoto("");
  }

  return (
    <div>
      <div className="Myinput">
        <input
          type="text"
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter name..."
          value={contact}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Enter surname..."
          value={surname}
        />
      </div>
      <input
        type="number"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
        value={phone}
      />
      <div>
        <input
          type="text"
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo..."
          value={photo}
        />
        <button onClick={handleSubmit}>Add Contact</button>
      </div>
    </div>
  );
};

export default AddContact;
