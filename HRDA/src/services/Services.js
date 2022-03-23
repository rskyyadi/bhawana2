import Axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const Services = Axios.create({
  baseURL: REACT_APP_BASE_URL,
});

Services.defaults.timeout = 10000;

Services.interceptors.request.use((config) => {
  const token = "Bearer " + sessionStorage.getItem("token");

  config.headers = {
    Authorization: token,
    "Content-Type": "application/json",
  };

  return config;
});

export default Services;
