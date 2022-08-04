export default ({ store, next }) => {
  const authenticate = store.getters["auth/authenticate"];
  if (!authenticate) {
    next("/login");
    return false;
  }
  next();
};
