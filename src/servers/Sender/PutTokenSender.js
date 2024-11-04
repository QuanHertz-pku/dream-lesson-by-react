import axios from 'axios';

const token = localStorage.getItem("token");
const PutTokenSender = (url,data) => {
  return axios.put(
    ('http://101.200.13.211:3000/api'+url ),data,{ headers: {
        Authorization: `Bearer ${token}`
    }}
  ).then(res=>res.data)
};

export default PutTokenSender;