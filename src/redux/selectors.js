const getName = state => state.auth.user.name;
const getToken = state => state.auth.token;
const isLogin = state => state.auth.isLoggedIn;
const getFilter = state => state.filter;

const selectors = {
  getName,
  getToken,
  getFilter,
  isLogin,
};

export default selectors;
