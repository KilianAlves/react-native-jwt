import * as SecureStore from 'expo-secure-store';

export async function loginAPI(data) {
  if (data.login !== undefined || data.password !== undefined) {
    // console.log("data.login", data.login);
    return fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: data.login, password: data.password }),
    }).then((response) => response.json());
  } else {
    return fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: data.refreshToken }),
    }).then((response) => response.json());
  }
}

export async function registerAPI(data, jwtToken) {
  return fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({
      username: data.username,
    }),
  }).then((response) => response.json());
}

export async function handleRefreshToken(navigation, dispatch) {
  const response = await SecureStore.getItemAsync("jwtToken");
  const jwtFromRefresh = await loginAPI({ refreshToken: response });
  if (jwtFromRefresh.error === "wrongrefresh") {
    await SecureStore.deleteItemAsync("jwtToken");
    navigation.navigate("Login");
    return "wrongrefresh";
  } else {
    await SecureStore.setItemAsync("jwtToken", jwtFromRefresh.refreshToken);
    dispatch({ type: "SET_JWT_TOKEN", payload: jwtFromRefresh.jwt });
    return "ok";
  }
  
}
