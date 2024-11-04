import GetTokenSender from "../Sender/GetTokenSender";

const ReadFileServer = (id)=>{
    return GetTokenSender("/files/content/"+id);
}

export default ReadFileServer;