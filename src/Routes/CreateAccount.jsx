import React, { useContext, useReducer } from "react";
import "../style/createAccount.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../Context/AuthContext";
import { useToast } from "@chakra-ui/react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_FIRST_NAME":
    case "UPDATE_LAST_NAME":
    case "UPDATE_EMAIL":
    case "UPDATE_PASSWORD":
    case "UPDATE_PHONE_NUMBER": {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return initialState;
    }
  }
}

const CreateAccount = () => {
  const { userData, setUserData } = useContext(AuthContextProvider);
  const [user, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const toast = useToast()

  function handealSubmit(e) {
    e.preventDefault();

    setUserData([...userData, user]);

    dispatch(initialState);
    toast({
      title: "Create Account Successfully",
      // description: " Successfully Login",
      duration: 3000,
      isClosable: true,
      status: "success",
      position: "top",
      // icon: 
  })
    navigate("/signin");
  }

  const { firstName, lastName, email, password, phoneNumber } = user;

  return (
    <form onSubmit={handealSubmit} className="createAccount">
      <div className="createAccount-container">
        <h2>
          <b>Create An Account</b>
        </h2>
        <hr />
        <div>
          <img
            className="img-container"
            src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"
            alt="beauty-logo"
          />
        </div>

        <p>
          Join the Beauty Insider loyalty program. Earn points, get{" "}
          <b>FREE standard shipping</b>, redeem rewards, and more.
        </p>

        <div className="createAccountInput">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_FIRST_NAME",
                payload: {
                  [e.target.name]: e.target.value,
                },
              });
            }}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_LAST_NAME",
                payload: {
                  [e.target.name]: e.target.value,
                },
              });
            }}
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_EMAIL",
              payload: {
                [e.target.id]: e.target.value,
              },
            });
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password ( 6 to 12 charaters )"
          value={password}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_PASSWORD",
              payload: {
                [e.target.id]: e.target.value,
              },
            });
          }}
        />
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => {
            dispatch({
              type: "UPDATE_PHONE_NUMBER",
              payload: {
                [e.target.name]: e.target.value,
              },
            });
          }}
        />

        <input className="joinnow" type="submit" value="Join Now" />
        {/* <Link className="joinnow" onClick={handealSubmit} to="">
          Join Now
        </Link> */}
      </div>
    </form>
  );
};

export default CreateAccount;
