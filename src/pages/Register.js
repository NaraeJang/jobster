import { useEffect, useState } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleChange = (e) => {
    console.log(e.target);
    setValues(e.target.value);
  };

  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <div className="form-row">
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        </div>

        {/* email field */}
        <div className="form-row">
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
        </div>

        {/* password field */}
        <div className="form-row">
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
