import axios from "axios";

/** @description creating an instance of axios to minimize the code needed to make ajax calls */

const instance = axios.create({
  baseURL: "https://madaris-api.halayalla.rocks/api"
});

// * you can use interpretors as a middleware for axios
// * this for example is a middleware to check if any response returns unaotuhorized to logout the user from any ajax call with this kinda of resposne
// instance.interceptors.response.use(
//     function(response) {
//       return Promise.resolve(response);
//     },
//     function(error) {
//       const status = error ? error.response.status : 500;
//       if (status === 401) {
//         sessionStorage.removeItem("token");
//         sessionStorage.removeItem("user");
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         window.location.href = "/login";
//       }
//       return Promise.reject(error);
//     }
//   );

export default instance;
