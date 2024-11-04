import PutTokenSender from "../Sender/PutTokenSender";

const SaveFileServer = async (id,data) => {
  return await PutTokenSender("/files/update/"+id, data);
};

export default SaveFileServer;