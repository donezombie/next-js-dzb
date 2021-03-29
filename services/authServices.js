class AuthServices {
  saveInfoToStorage() {
    window.localStorage.setItem('isLogged', true);
  }

  clearInfoStorage() {
    window.localStorage.removeItem('isLogged');
  }
}

export default new AuthServices();