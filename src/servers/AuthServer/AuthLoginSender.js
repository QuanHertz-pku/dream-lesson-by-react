import PostSender from "../Sender/PostSender";

const AuthLoginSender = (data)=>{
    return PostSender("/auth/login", data);
}

export default AuthLoginSender;