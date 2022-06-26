export const setUser = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    alert(e.message);
  }
};

export const getUser = (key) => {
  try {
    const userInfo = localStorage.getItem(key);
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
