const token = {
  get: () => {
    return localStorage.getItem('token');
  },
  set: (token: string) => {
    localStorage
      .setItem('token', token);
  }
}

const localStorageUtils = {
  token
};

export default localStorageUtils;
