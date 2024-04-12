import { useReducer } from "react";
import "../style/signin.css";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const initial = {
  email: "",
  password: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL": {
      return {
        ...state,
        ...payload,
      };
    }`
    case "PASSWORD": {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};

const Signin = () => {
  const [singleUser, dispatch] = useReducer(reducer, initial);

  const { email, password } = singleUser;

  function matchUserData(e) {
    e.preventDefault();
    console.log(singleUser);
  }

  return (
    <form onSubmit={matchUserData} className="signiPage">
      <div className="signinContainer">
        <h2>
          <b>Sign In</b>
        </h2>
        <p>
          Sign in or create an account to enjoy <b>FREE standard shipping</b> on
          all orders.
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            dispatch({
              type: "EMAIL",
              [e.target.name]: e.target.value,
            });
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            dispatch({
              type: "PASSWORD",
              [e.target.name]: e.target.value,
            });
          }}
        />

        {/* <BiSolidHide /> */}
        <div className="checkbox">
          <div>
            <input type="checkbox" />
            <span>Keep me signed in</span>
          </div>
          <Link>
            <b>Forgot password?</b>
          </Link>
        </div>

        <p className="signindis">
          By clicking “Sign In”, you (1) agree to the current version of our
          TERMS OF USE, and (2) have read Sephora’s Privacy Policy
        </p>
        <input type="submit" value="Sign In" />

        <hr />
        <div>
          <h2>
            <b>New to Sephora?</b>
          </h2>
          <Link className="createaccoutbtn" to="/CreateAccount">
            Create Account
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Signin;
