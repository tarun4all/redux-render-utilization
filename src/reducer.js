const cachedMemoryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "ADD":
      const temp = { ...state };
      console.log(temp);
      temp.B = "Tarun";
      return { ...temp };
    default:
      return state;
  }
};
export default cachedMemoryReducer;
