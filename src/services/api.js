export async function getAdminContactsList() {
  return fetch("http://localhost:3000/admin/contacts").then((response) =>
    response.json(),
  );
}

export async function getMe(jwtToken) {
  return fetch("http://localhost:3000/me", {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  }).then((response) => response.json());
}

export async function getUserContactsList(jwtToken) {
  return fetch("http://localhost:3000/api/contacts", {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  }).then((response) => response.json());
}

export async function getContactInfo(jwtToken, contactId) {
  console.log("contactInfo ID : ", contactId);
  return fetch(`http://localhost:3000/api/contact/${contactId}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  }).then((response) => response.json());
}
