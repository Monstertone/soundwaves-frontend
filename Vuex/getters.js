export const getters = {
  user: (state) => {
    return Object.keys(state.user).length !== 0 ? state.user : false;
  }

}
