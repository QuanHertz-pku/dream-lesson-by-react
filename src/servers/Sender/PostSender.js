import axios from 'axios';
const PostSender = (url,data) => {
  console.log(data)
  return axios.post(
    ('http://localhost:8000/api'+url ),data
  ).then(res=>res.data)
};

export default PostSender;