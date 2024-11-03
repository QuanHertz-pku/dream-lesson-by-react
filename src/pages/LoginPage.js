import react from "react";

import {
    LoginForm
} from "@/components";

import LoginFormProps from '@/props/componentprops/LoginFormProps'
function LoginPage({}){

    return(
        <div>
            <LoginForm {...LoginFormProps}></LoginForm>
        </div>
    )
}

export default LoginPage