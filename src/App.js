import React, { useState } from "react";
import { connect } from "react-redux";
import {
  increaseCouter,
  decreaseCouter,
  resetCouter,
} from "./store/couterAction";
import { useDispatch, useSelector } from "react-redux";

// used default redux
// function App(props) {

// used hook for redux
function App() {

  // used hook for redux
  // const dispatch = useDispatch();
  // const { couter } = useSelector((state) => state.couter);

  // used default redux
  // const [couter, setCouter] = useState(initCouter);

  return (
    <div>
      {/* used default redux */}
      {/* <p>value {props.couter}</p>
      <button onClick={props.increaseCouter}>Increase</button>
      <button onClick={props.decreaseCouter}>Decrease</button>
      <button onClick={props.resetCouter}>Reset</button> */}

      {/* used hook for redux */}
      {/* <p>value {couter}</p>
      <button onClick={() => dispatch(increaseCouter(couter))}>Increase</button>
      <button onClick={() => dispatch(decreaseCouter(couter))}>Decrease</button>
      <button onClick={() => dispatch(resetCouter(couter))}>Reset</button> */}

      {/* used thunk */}
      
    </div>


  );
}

// used hook for redux
// const mapStateToProps = (state) => ({
//   couter: state.couter.couter,
// });
//
// const mapDispatchToProps = {
//   increaseCouter,
//   decreaseCouter,
//   resetCouter,
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
