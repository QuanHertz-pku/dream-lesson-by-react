import { WholeRow } from "../components";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";

//import EditorProps from "../props/componentprops/EditorProps";
import GetDirectoryServer from "../servers/FileServer/GetDirectoryServer";
function HomePage(){

    const navigate = useNavigate ();
    const [EditorProps,setEditorProps] = useState({ files: [] });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // 没有 token，跳转到 login 页面
            return;
        }
        const fetchFiles = async () => {
            const data = await GetDirectoryServer(); // 从 GetDirectoryServer 获取数据
            console.log("Fetched files:", data); // 打印数据，便于调试

            // 更新 EditorProps 的状态
            setEditorProps(prevProps => ({
                ...prevProps,
                files: data // 将数据放入 files 属性中
            }));
        };

        fetchFiles(); // 调用异步函数
    }, [navigate]);

    return (
        <>
            <WholeRow {...EditorProps} />
        </>
    );
}

export default HomePage;