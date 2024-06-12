export async function loginAPI(login, password) {
  return fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login: login, password: password }),
  }).then((response) => response.json());
}
