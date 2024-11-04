import axios from 'axios';

const token = localStorage.getItem("token");
const GetTokenSender = (url) => {
  return axios.get(
    ('http://101.200.13.211:3000/api'+url ),{ headers: {
        Authorization: `Bearer ${token}`
    }}
  ).then(res=>res.data)
};

export default GetTokenSender;