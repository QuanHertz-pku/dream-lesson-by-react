import PostTokenSender from "../Sender/PostTokenSender";

const AddFileServer = ()=>{
    return PostTokenSender("/files/add/",null);
}

export default AddFileServer;