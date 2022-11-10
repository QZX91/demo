import { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(undefined);

  const addUserHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "An Error has Occurred",
        message: "Name and Age cannot be empty",
      });
      return;
    }
    if (Number(age) < 1) {
      setError({
        title: "An Error has Occurred",
        message: "Age cannot be less than 1",
      });
      return;
    }

    props.addUser(name, age);
    setName("");
    setAge("");
  };

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onModalDismiss={()=>setError(undefined)}/>}
      <Card extraClass={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={changeNameHandler}
            value={name}
          />
          <label htmlFor="age">Age</label>
          <input type="text" id="age" onChange={changeAgeHandler} value={age} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
