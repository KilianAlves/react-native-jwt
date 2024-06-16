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
  return fetch(`http://localhost:3000/api/contact/${contactId}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  }).then((response) => response.json());
}

export async function updateContact(jwtToken, contact) {
  return fetch(`http://localhost:3000/api/contact/${contact.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify(contact),
  }).then((response) => response.json());
}

export async function postContact(jwtToken, contact) {
  return fetch(`http://localhost:3000/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify(contact),
  }).then((response) => response.json());
}
