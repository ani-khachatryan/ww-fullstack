export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('access'));

    if (user && user.access) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}
  