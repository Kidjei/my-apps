const initialState = {
  Compteur: 5000,
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENTE") {
    return {
      Compteur: state.Compteur + 1,
    };
  }

  if (action.type === "DECREMENTE") {
    return {
      Compteur: state.Compteur - 1,
    };
  }

  return state;
};

export default reducer;
