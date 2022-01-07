import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  ModalDialog,
  ModalFooter,
  ModalTitle,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const ContactCard = (props) => {
  let [edit, setEdit] = useState(props.editTodo);
  function handleEditContact(e) {
    let newObj = { ...edit };
    newObj[e.target.name] = e.target.value;
    setEdit(newObj);
  }
  function handleSave() {
    props.handleSaveContact(edit);
  }
  return (
    <div>
      <div key={props.editTodo.id}>
        <ModalDialog>
          <ModalHeader closeButton>
            <ModalTitle>Edit Contact</ModalTitle>
          </ModalHeader>

          <FormControl
            name="contact"
            onChange={handleEditContact}
            value={props.editTodo.name}
            className="mt-3"
            type="text"
            placeholder="Name"
          />
          <FormControl
            name="surname"
            onChange={handleEditContact}
            value={props.editTodo.name}
            className="mt-3"
            type="text"
            placeholder="Surname"
          />
          <FormControl
            name="phone"
            onChange={handleEditContact}
            value={props.editTodo.name}
            className="mt-3"
            type="number"
            placeholder="Phone"
          />

          <img src="" alt="" />

          <ModalFooter>
            <Button onClick={props.handleCloseModal} variant="secondary">
              Close
            </Button>
            <Button onClick={handleSave} variant="primary">
              Save changes
            </Button>
          </ModalFooter>
        </ModalDialog>
      </div>
    </div>
  );
};

export default ContactCard;
