import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../actions/studentActions";
import { Button, Modal, ModalHeader } from "reactstrap";

const initialState = {
  modal: false,
  firstName: "",
  lastName: "",
  email: "",
  title: "",
  nationality: "",
  skills: [],
  whySoftwareDeveloper: "",
  longTermVision: "",
  motivatesMe: "",
  favoriteQuote: "",
  joinedOn: "",
  file: null,
  isTouched: {
    firstName: false,
    lastName: false,
    email: false,
    title: false,
    nationality: false,
    skills: false,
    joinedOn: false,
    file: false
  }
};
class AddNewStudent extends Component {
  state = initialState;
  validate = (
    firstName,
    lastName,
    email,
    title,
    joinedOn,
    nationality,
    skills,
    file
  ) => {
    const errors = {
      firstName: /[a-zA-Z]/.test(firstName)
        ? ""
        : "First name must contains alphabets",
      lastName: /[a-zA-Z]/.test(lastName)
        ? ""
        : "Last name must contains alphabets",
      email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)
        ? ""
        : "enter valid email adderess",
      title: title === "" ? "This field in required" : "",
      nationality: /[a-zA-Z]/.test(nationality)
        ? ""
        : "Nationality it should contain alphabets ",

      skills: skills.length === 0 ? "Please enter atleast one skill" : "",
      joinedOn: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
        joinedOn
      )
        ? ""
        : "Plese enter requested date format",
      file: file === null ? "Please select file" : ""
    };

    return errors;
  };
  handleFocus = e => {
    const field = e.target.name;
    this.setState(prevState => ({
      isTouched: {
        ...prevState.isTouched,
        [field]: true
      }
    }));
  };
  toggle = () => {
    this.setState({ ...initialState, modal: !this.state.modal });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFile = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let { ...data } = this.state;
    console.log(data);

    const newStudent = new FormData();

    for (let name in data) {
      newStudent.append(name, data[name]);
    }

    this.props.addStudent(newStudent);
    this.toggle();
  };

  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      title,
      joinedOn,
      nationality,
      skills,
      file
    } = this.state;
    const errors = this.validate(
      firstName,
      lastName,
      email,
      title,
      joinedOn,
      nationality,
      skills,
      file
    );

    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Student
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Students List</ModalHeader>
          <form
            className="form"
            onSubmit={this.onSubmit}
            action="/"
            encType="multipart/form-data"
            method="POST"
          >
            <div
              className={
                this.state.isTouched.firstName && errors.firstName
                  ? "invalid"
                  : ""
              }
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name "
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>First Name</label>
              {this.state.isTouched.firstName && errors.firstName && (
                <span>
                  <br />
                  {errors.firstName}
                </span>
              )}
            </div>
            <div
              className={
                this.state.isTouched.lastName && errors.lastName
                  ? "invalid"
                  : ""
              }
            >
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>Last Name</label>
              {this.state.isTouched.lastName && errors.lastName && (
                <span>
                  <br />
                  {errors.lastName}
                </span>
              )}
            </div>
            <div
              className={
                this.state.isTouched.email && errors.email ? "invalid" : ""
              }
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>Email</label>
              {this.state.isTouched.email && errors.email && (
                <span>
                  <br />
                  {errors.email}
                </span>
              )}
            </div>
            <div
              className={
                this.state.isTouched.title && errors.title ? "invalid" : ""
              }
            >
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>Title</label>
              {this.state.isTouched.title && errors.title && (
                <span>
                  <br />
                  {errors.title}
                </span>
              )}
            </div>
            <div
              className={
                this.state.isTouched.nationality && errors.nationality
                  ? "invalid"
                  : ""
              }
            >
              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>Nationality</label>
              {this.state.isTouched.nationality && errors.nationality && (
                <span>
                  <br />
                  {errors.nationality}
                </span>
              )}
            </div>
            <div
              className={
                this.state.isTouched.skills && errors.skills ? "invalid" : ""
              }
            >
              <input
                type="text"
                name="skills"
                placeholder="Skills seperated by commas"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>Skills</label>
              {this.state.isTouched.skills && errors.skills && (
                <span>
                  <br />
                  {errors.skills}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="whySoftwareDeveloper"
                placeholder="WhySoftwareDeveloper"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>WhySoftwareDeveloper</label>
            </div>
            <div>
              <input
                type="text"
                name="longTermVision"
                placeholder="LongTermVision"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>LongTermVision</label>
            </div>
            <div>
              <input
                type="text"
                name="motivatesMe"
                placeholder="What Motivates you"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>What Motivates you</label>
            </div>
            <div>
              <input
                type="text"
                name="favoriteQuote"
                placeholder="Favorite Quotation"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>Favorite Quotation</label>
            </div>
            <div
              className={
                this.state.isTouched.joinedOn && errors.joinedOn
                  ? "invalid"
                  : ""
              }
            >
              <input
                type="timedate"
                name="joinedOn"
                placeholder="Joined On dd/mm/yyyy"
                onChange={this.onChange}
                onBlur={this.handleFocus}
              />
              <label>Joined On</label>
              {this.state.isTouched.joinedOn && errors.joinedOn && (
                <span>
                  <br />
                  {errors.joinedOn}
                </span>
              )}
            </div>
            <div
              className={
                this.state.isTouched.joinedOn && errors.joinedOn
                  ? "invalid"
                  : ""
              }
            >
              <input
                type="file"
                name="file"
                accept="image/gif, image/jpeg, image/png"
                onChange={this.handleFile}
                onBlur={this.handleFocus}
              />
              {this.state.isTouched.file && errors.file && (
                <span>
                  <br />
                  {errors.file}
                </span>
              )}
            </div>
            <Button
              color="dark"
              style={{ marginTop: "2rem" }}
              type="submit"
              disabled={this.isSubmitDisabled(errors)}
            >
              Add Student
            </Button>
          </form>
          <Button type="button" onClick={() => this.setState(initialState)}>
            Cancel
          </Button>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    student: state.student
  };
};

export default connect(
  mapStateToProps,
  { addStudent }
)(AddNewStudent);
