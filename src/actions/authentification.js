export async function loginAPI(data) {
  if (data.login !== undefined || data.password !== undefined) {
    console.log("data.login", data.login);
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
