export const setUser = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    alert(e.message);
  }
};

export const getUser = () => {
  try {
    const userInfo = localStorage.getItem('user');
    return userInfo ? userInfo : null;
  } catch (e) {
    return null;
  }
};

export const logOutUser = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    alert(e.message);
  }
};
