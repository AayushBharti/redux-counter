import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

function Counter() {
  //to access value of slices
  const count = useSelector((state) => state.counter.value);
  //to call reducer fuctionalities, we need to use a hook name useDispatch
  const dispatch = useDispatch();

  //   We can read data from the store with useSelector,
  //   and dispatch actions using useDispatch

  return (
    <div>
      <div className="flex items-center h-screen w-screen justify-center gap-4">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;

// What You've Learned
// That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:

// SUMMARY
// Create a Redux store with configureStore
// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings
// Provide the Redux store to the React application components
// Put a React-Redux <Provider> component around your <App />
// Pass the Redux store as <Provider store={store}>
// Create a Redux "slice" reducer with createSlice
// Call createSlice with a string name, an initial state, and named reducer functions
// Reducer functions may "mutate" the state using Immer
// Export the generated slice reducer and action creators
// Use the React-Redux useSelector/useDispatch hooks in React components
// Read data from the store with the useSelector hook
// Get the dispatch function with the useDispatch hook, and dispatch actions as needed
