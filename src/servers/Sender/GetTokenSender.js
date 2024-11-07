import axios from 'axios';

const token = localStorage.getItem("token");
const GetTokenSender = (url) => {
  return axios.get(
    ('/api'+url ),{ headers: {
        Authorization: `Bearer ${token}`
    }}
  ).then(res=>res.data)
};

export default GetTokenSender;
