export async function getAdminContactsList() {
  return fetch("http://localhost:3000/admin/contacts").then((response) =>
    response.json(),
  );
}
