import axios from "axios";

export const axiosBase = axios.create({
  baseURL: `http://3.140.186.242:8787/`,
});


// export const axiosBase = axios.create({
//   baseURL: `http://localhost:8787/`,
// });
