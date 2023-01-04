import { useRegisterPage } from "../../hooks/useRegisterPage";
import "animate.css";
import { MessageInputStyled } from "../MessageInput/MessageInputStyled";
import { ContainerPage } from "./RegisterPageStyled";
export const RegisterPage = () => {
  const { user, message, onSubmit, handleInputChange } = useRegisterPage();

  return (
    <ContainerPage className="row pt-5">
      <div className="col-6">
        <h1 className="pb-5">Register Page</h1>
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
                Sign in
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
    </ContainerPage>
  );
};
