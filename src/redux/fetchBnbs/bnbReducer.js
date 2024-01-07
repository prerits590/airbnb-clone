const initialState = {
  bnbs: [],
  error: null,
};

const bnbReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BNB_SUCCESS":
      return { ...state, error: null };
    case "ADD_BNB_FAILURE":
      return { ...state, error: action.payload };
    case "REMOVE_BNB_SUCCESS":
      return { ...state, error: null };
    case "REMOVE_BNB_FAILURE":
      return { ...state, error: action.payload };
    case "FETCH_BNBS_SUCCESS":
      return { ...state, bnbs: action.payload, error: null };
    case "FETCH_BNBS_FAILURE":
      return { ...state, bnbs: [], error: action.payload };
    default:
      return state;
  }
};

export default bnbReducer;
