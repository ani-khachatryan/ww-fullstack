import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth/sign_in/`;
const API_GET_USER_URL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/current_user/`;

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL, {
        username,
        password
      })
      .then(response => {
        console.log(response);
        if (response.data.accessToken) {
          localStorage.setItem("access", response.data.accessToken);
          localStorage.setItem("user", response.data.username);
          localStorage.setItem("auth", JSON.stringify(response.data));
        }

        // if (response.data.access) {
          // console.log(response)
          // localStorage.setItem("access", JSON.stringify(response.data));
          // axios.get(API_GET_USER_URL, {headers: {
          //   "Authorization": `Bearer ${response.data.access}`
          // }}).then(response1 => {
          //   console.log(response1)
          //   localStorage.setItem("user", JSON.stringify(response1.data))
          //   return response1.data;
          // }, (err)=>{
          //   console.log(err)
          // })
        // }
      });
  }
  
  logout() {
    localStorage.removeItem("access")
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
  }
  
  register(username, email, password) {
    return axios.post(API_URL + "sign_up", {
      username,
      email,
      password
    });
  }
  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("auth"));
  }
}

export default new AuthService();