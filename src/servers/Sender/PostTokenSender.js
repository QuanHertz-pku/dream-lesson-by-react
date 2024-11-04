import axios from 'axios';


const token = localStorage.getItem("token");

const PostTokenSender = (url,data) => {
  console.log(data)
  return axios.post(
    ('http://localhost:8000/api'+url ),data,{ headers: {
      Authorization: `Bearer ${token}`
  }}).then(res=>res.data)
};

export default PostTokenSender;