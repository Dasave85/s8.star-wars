import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useUser } from "../../hooks";
import { types } from "../../types";
import { MessageInputStyled } from "../MessageInput";

export const LoginPage = () => {
  const { userList, dispatch } = useContext(UserContext);

  const { user, setUserInput, clearInput } = useUser();

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserInput({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userExist = userList.find((usr) => usr.name === user.name);

    if (!userExist) {
      setMessage(`No existe ningun usuario con el nombre ${user.name}.`);
      clearInput();
      return;
    }

    if (userExist) {
      if (userExist.password !== user.password) {
        setMessage("Error! Password Incorrecto");
        clearInput();
        return;
      }
      const action = {
        type: types.login,
        payload: userExist,
      };

      dispatch(action);
      navigate("/starships");
    }
  };

  return (
    <div
      className="row bg-dark p-5 justify-content-center"
      style={{ height: "300px" }}
    >
      <div className="col-6">
        <h1 className="text-center text-white pb-5">Login Page</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-5">
              <p>User Name</p>
            </div>
            <div className="col-5">
              <p>Password</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-5">
              <input
                className="form-control "
                type="text"
                name="name"
                value={user.name}
                placeholder="Enter your user name"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-5">
              <input
                className="form-control "
                type="password"
                name="password"
                value={user.password}
                placeholder="Enter your password"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-outline-secondary" type="submit">
                Login
              </button>
            </div>
            <div className="row">
              {message ? (
                <MessageInputStyled message={message}>
                  {message}
                </MessageInputStyled>
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
