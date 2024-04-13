import { useContext, useReducer, useState } from "react";
import "../style/signin.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../Context/AuthContext";
import { useToast } from "@chakra-ui/react";

const Signin = () => {
  const { userData } = useContext(AuthContextProvider);

  const [signinUser, setSigninUser] = useState({
    email: "",
    password: "",
  });

  const navigateHomePage = useNavigate()

  const toast = useToast()

  function matchUserData(e) {
    e.preventDefault();
    // console.log(signinUser);


    if(userData.length == 0) {
      navigateHomePage("/CreateAccount")
    }else{

      userData.map((user) => {
        if (
          user.email === signinUser.email &&
          user.password === signinUser.password
        ) {

          toast({
              title: "Logged in",
              description: " Successfully Login",
              duration: 3000,
              isClosable: true,
              status: "success",
              position: "top",
              // icon: 
          })
           navigateHomePage("/")
  
        }else{
          alert("Please enter the correct username and password");
        }
      });
    }


    setSigninUser({
      email: "",
      password: "",
    });
  }

  const { email, password } = signinUser;

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
            setSigninUser({
              ...signinUser,
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
            setSigninUser({
              ...signinUser,
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
