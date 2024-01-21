import React, { useReducer } from "react";

const initialState = {
  count: 0,
  inputValues: {
    name: "",
    email: "",
    password: "",
  },
  userData: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "increment": {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case "decrement": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case "formValues": {
      return {
        ...state,
        inputValues: { ...state.inputValues, [payload.name]: payload.value },
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

export const FormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleCount = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  // form

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "formValues", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "formSubmit", payload: state.inputValues });
  };

  return (
    <div>
      <h1>count {state.count}</h1>
      <button onClick={handleCount}>Increase</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter name"
            name="name"
            onChange={handleChange}
            value={state.inputValues.name}
          />
          <input
            type="email"
            placeholder="enter email"
            name="email"
            onChange={handleChange}
            value={state.inputValues.email}
          />
          <input
            type="password"
            placeholder="enter password"
            name="password"
            onChange={handleChange}
            value={state.inputValues.password}
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};
