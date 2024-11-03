import { WholeRow } from "../components";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import EditorProps from "../props/componentprops/EditorProps";
function HomePage(){

    const navigate = useNavigate ();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // 有 token，跳转到 Home 页面
        }
    }, []);

    return (
        <>
            <WholeRow {...EditorProps} />
        </>
    );
}

export default HomePage;