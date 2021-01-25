import { connect } from "react-redux";

function Test({ cachedMemory, name }) {
  console.log("re render works >> ", cachedMemory);
  return (
    <div>
      <h1>{cachedMemory}</h1>
    </div>
  );
}

const MapStateToProps = (state, ownProps) => {
  //   return { tileData: state.tiles[ownProps.id] };
  return {
    cachedMemory: state.cachedMemory[ownProps.name],
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

export default connect(MapStateToProps, MapDispatchToProps)(Test);
