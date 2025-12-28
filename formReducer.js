export const initialState = {
  formValues: {
    name: "",
    email: "",
    username: "",
    password: ""
  },
  currentStep: 1,
  isSubmitted: false
};

export function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.field]: action.value
        }
      };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREVIOUS_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    case "SUBMIT_FORM":
      return { ...state, isSubmitted: true };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}
