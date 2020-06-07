
import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'
import UserInput from './atoms/UserInput'
import './App.css'


export default class App extends Component {
  state = {
    formState: {
       id: 0,
       username: "",
       ratings: "",
       duration: "",
       mode: "submit"
    },
    search: '',

    users: [ {
      id: 0,
      username: "david",
      ratings: "guerrero",
      duration: "david_xc3@hotmail.com",
      updating: false
   }]
 };
 resetFormState = () => {
  this.setState({
     formState: {
      username: "",
        ratings: "",
        duration: "",
        mode: "submit",
        id: "",
     },
  });
};
updateUser = key => {
  let { users } = this.state;
  users[key].updating = true;

  this.setState({
     formState: { ...this.state.users[key], mode: "edit" },
     users
  });
};
handleChange = (event) => {
  let searchValue = event.target.value;
  console.log(searchValue,'searchValue')
  this.setState({ search: searchValue });
}
 onChange = event => {
  this.setState({
     formState: {
        ...this.state.formState,
        [event.target.name]: event.target.value
     }
  });
};
validateForm = () => {
  let formState = this.state.fields;
  let errors = {};
  let formIsValid = true;

  if (!formState["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your name.";
  }

  if (typeof formState["username"] !== "undefined") {
      if (!formState["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
      }
  }

  if (!formState["duration"]) {
      formIsValid = false;
      errors["duration"] = "*Please enter movie duration.";
  }

  if (!formState["ratings"]) {
      formIsValid = false;
      errors["rating"] = "*Please enter your mobile no.";
  }

  if (!formState["ratings"]) {
      formIsValid = false;
      errors["rating"] = "*Please enter movie duration.";
  }
  this.setState({
      errors: errors
  });
  return formIsValid;
}

onSubmit = event => {
  const { users, formState } = this.state;
  event.preventDefault();
  const username = event.target.querySelector("input[name='username']")
     .value;
  const ratings = event.target.querySelector("input[name='ratings']")
     .value;
  const duration = event.target.querySelector("input[name='duration']").value;
  if (formState.mode === "submit") {
     this.setState({
        users: [
           ...this.state.users,
           {
            username,
              ratings,
              duration,
              updating: false,
              id: this.state.users[this.state.users.length - 1].id + 1
           }
        ]
     });

  } else if (formState.mode === "edit") {
    console.log(users,'aseem')

    const index = users.find((user)=> user.id === formState.id).id;
    console.log(index,'index')


     users[index] = {
      username,
              ratings,
              duration,
              updating: false,
              id: users[index].username
           }
     this.setState({
        users: [...users]
     });
  }

  this.resetFormState();
};
updateUser = key => {
  let { users } = this.state;
  users[key].updating = true;

  this.setState({
     formState: { ...this.state.users[key], mode: "edit" },
     users
  });
};
  render() {
    const { formState } = this.state;
    let users = this.state.users,
  searchString = this.state.search.trim().toLowerCase();
    // console.log(searchString)

if (users && searchString.length > 1) {
  users = users.filter((e) => e.username.toLowerCase().match(searchString));
}

    return (
      <div>
        <div className = "movieform" align="center">
        <Form
            formState={formState}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
         />
        </div>
        
          <UserInput update={(e) => this.handleChange(e)} />
          <div className= "tablecontainer"> 
            <Table
            users={users}
            updateUser={this.updateUser}
         /></div>
        
      </div>
   );
  }
}



