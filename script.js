//ACTION
const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";

function buyPhone() {
  return {
    type: BUY_PHONE,
  };
}
function buyTablet() {
  return {
    type: BUY_TABLET,
  };
}
function buyTv() {
  return {
    type: BUY_TV,
  };
}

//REDUCER
//(prevState, action) => newState
const initialStatePhone = {
  phones: 5,
  tablets: 10,
};
const phoneReducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
      break;
    case BUY_TABLET:
      return {
        ...state,
        tablets: state.tablets - 1,
      };
    default:
      return state;
  }
};
//create another reducer
const initialStateTv = {
  tv: 20,
};
const tvReducer = (state = initialStateTv, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - 1,
      };
    default:
      return state;
  }
};

//combine reducers
const rootReducer = Redux.combineReducers({
  phone: phoneReducer,
  tv: tvReducer,
});
//création store
const store = Redux.createStore(rootReducer);
//console.log(store);
const availablePhones = document.getElementById("count");
availablePhones.innerHTML = store.getState().phone.phones;

document.getElementById("buy-phone").addEventListener("click", function () {
  store.dispatch(buyPhone());
});
//listener
store.subscribe(() => {
  availablePhones.innerHTML = store.getState().phone.phones;
  availableTablets.innerHTML = store.getState().phone.tablets;
  availableTv.innerHTML = store.getState().tv.tv;
});

//tablette
const availableTablets = document.getElementById("count-tab");
availableTablets.innerHTML = store.getState().phone.tablets;

document.getElementById("buy-tablet").addEventListener("click", function () {
  store.dispatch(buyTablet());
});

//tv
const availableTv = document.getElementById("count-tv");
console.log(store.getState().tv.tv);
availableTv.innerHTML = store.getState().tv.tv;

document.getElementById("buy-tv").addEventListener("click", function () {
  store.dispatch(buyTv());
});

