import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducers/formReducer";

export default function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div>
      <p>Step {state.currentStep} of 3</p>
      {!state.isSubmitted ? (
        <form onSubmit={handleSubmit}>
          {state.currentStep === 1 && (
            <div>
              <h2>Step 1: Personal Details</h2>
              <input
                name="name"
                placeholder="Name"
                value={state.formValues.name}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                value={state.formValues.email}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => dispatch({ type: "NEXT_STEP" })}
                disabled={!state.formValues.name || !state.formValues.email}
              >
                Next
              </button>
            </div>
          )}

          {state.currentStep === 2 && (
            <div>
              <h2>Step 2: Account Details</h2>
              <input
                name="username"
                placeholder="Username"
                value={state.formValues.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={state.formValues.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "NEXT_STEP" })}
                disabled={!state.formValues.username || !state.formValues.password}
              >
                Next
              </button>
            </div>
          )}

          {state.currentStep === 3 && (
            <div>
              <h2>Step 3: Review & Submit</h2>
              <p>Name: {state.formValues.name}</p>
              <p>Email: {state.formValues.email}</p>
              <p>Username: {state.formValues.username}</p>
              <p>Password: {state.formValues.password}</p>
              <button
                type="button"
                onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
              >
                Back
              </button>
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      ) : (
        <div>
          <h2>Form Submitted Successfully 🎉</h2>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
