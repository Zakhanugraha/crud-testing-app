import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { nanoid } from 'nanoid';
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('')
  const { addUser } = useContext(GlobalContext);
  // const { addUserName } = useContext(GlobalContext)
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      name,
      userName
    }
    addUser(newUser);
    // addUserName(newUser);
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
    setUserName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input>

        <Label>User Name</Label>
        <Input type="text" value={userName} onChange={onChange} name="name" placeholder="Enter userName" required></Input>

      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
