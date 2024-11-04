import GetTokenSender from "../Sender/GetTokenSender";

const GetDirectoryServer = ()=>{
    return GetTokenSender("/files/list");
}

export default GetDirectoryServer;