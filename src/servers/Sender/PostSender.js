import axios from 'axios';
const PostSender = (url,data) => {
  console.log(data)
  return axios.post(
    ('http://101.200.13.211:3000/api'+url ),data
  ).then(res=>res.data)
};

export default PostSender;