import axios from "axios";

const url = "https://interview.intrinsiccloud.net/auth/login";

const data = {
  password: "Pa$$w0rd",
  username: "user3@intrinsicgrouplimited.com"
};

export const getToken = () => {
  return axios.post(url, data);
};
