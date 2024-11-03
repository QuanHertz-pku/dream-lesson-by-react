import react from "react";
import { useNavigate } from 'react-router-dom';

import {
    LoginForm
} from "@/components";

import LoginFormProps from '@/props/componentprops/LoginFormProps'
function LoginPage({}){

    const navigate = useNavigate ();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home'); // 有 token，跳转到 Home 页面
        }
    }, []);

    return(
        <div>
            <LoginForm {...LoginFormProps}></LoginForm>
        </div>
    )
}

export default LoginPage