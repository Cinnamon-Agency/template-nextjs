import axios, { AxiosRequestConfig } from "axios";
import { STATUS_CODE_UNAUTHORIZED, STATUS_CODE_BAD_REQUEST } from "parameters";

const apiUrl = process.env.API_BASE_URL;
const appUrl = process.env.APP_BASE_URL;

export const localAxios = axios.create({
  baseURL: appUrl,
});


export const remoteAxios = axios.create({
  baseURL: apiUrl,
});

remoteAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // const token = localStorage.getItem(ACCESS_TOKEN_NAME);
    // if (token !== null) {
    //   console.log("Axios interceptor token: " + token);
    //   config!.headers!.authorization = `JWT ${token}`;
    // }
    return config;
  },
  (error) => {
    console.log("Axios interceptor error ");
    return Promise.reject(error);
  }
);

// Add a response interceptor
remoteAxios.interceptors.response.use(
  function (response) {
    console.log("Axios interceptor response " + response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (
      error?.response?.status === STATUS_CODE_UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      // try refresh with token
      // RefreshTokenJWT();
      // redirect to login page
      // RemoveUserDataFromStorage();
      // history.push("/");
    } else if (error?.response?.status === STATUS_CODE_BAD_REQUEST) {
      // handle bad request
      // let responseData = error.response.data;
      // responseData.forEach(function(message: any) {
      //   let messageItem = message;
      // })
      // toast.error(error.message, {
			// 	position: 'top-right',
			// 	autoClose: 5000,
			// 	hideProgressBar: true,
			// 	closeOnClick: true,
			// 	pauseOnHover: true,
			// 	draggable: false,
			// 	progress: undefined
			// });
    }
    return Promise.reject(error);
  }
);
