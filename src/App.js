import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Test from "./Test";

function App(props) {
  const list = [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }];
  return (
    <div>
      <div
        style={{
          display: "flex",
          direction: "row",
          justifyContent: "space-between",
        }}
      >
        {list.map((d) => (
          <div style={{ minWidth: "200px", background: "#ecd7d7" }}>
            <Test name={d.name} />
          </div>
        ))}
      </div>
      <button onClick={() => props.updateCache()}>Click me</button>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    cachedMemory: state.cachedMemory,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    updateCache: () => {
      dispatch({ type: "ADD", payload: "tarun" });
      return null;
    },
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
