import React, { useReducer } from "react";

const initialState = {
  inputValue: {
    name: "",
    email: "",
    password: "",
  },
  userData: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "inputValue": {
      return {
        ...state,
        inputValue: { ...state.inputValue, [payload.name]: payload.value },
      };
    }

    case "formSubmit": {
      return {
        ...state,
        userData: [...state.userData, payload],
      };
    }

    default: {
      return state;
    }
  }
};

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "inputValue", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "formSubmit", payload: state.inputValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text "
          name="name"
          placeholder="enter your name"
          onChange={handleChange}
          value={state.inputValue.name}
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={handleChange}
          value={state.inputValue.email}
        />
        <input
          type="passeword"
          name="password"
          placeholder="enter password"
          onChange={handleChange}
          value={state.inputValue.password}
        />
        <button>submit</button>
      </div>
    </form>
  );
};
