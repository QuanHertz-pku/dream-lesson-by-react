import axios from 'axios';

const token = localStorage.getItem("token");
const PutTokenSender = (url,data) => {
  return axios.put(
    ('http://localhost:8000/api'+url ),data,{ headers: {
        Authorization: `Bearer ${token}`
    }}
  ).then(res=>res.data)
};

export default PutTokenSender;