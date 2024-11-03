import react,{useState,useEffect} from 'react'
import {
    Input,
    Label,
    Form,
    FormGroup,
    Button,
    FormText,
    Card,
    Alert
} from 'reactstrap'

import CenterContainer from './CustomContainer/CenterContainer';
import AuthLoginSender from '@/servers/AuthServer/AuthLoginSender'
function LoginForm(props){
    const [formData, setFormData] = useState({});
    const [visible, setVisible] = useState(false);

    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        AuthLoginSender(formData).then(res=>{
            console.log(res);
            if(res.message === '登录成功'){
                localStorage.setItem('token', res.token);
            }
        }).catch((res)=>{
            console.log(res.message)
            if(res.message === "用户不存在" || res.message === "密码错误"){
                setVisible(true);
            }
        });
    }

    return (
        <>
        <CenterContainer>
            <Card {...props.card}>
                <h3>SweetHome</h3>
                <Form>
                    {
                        props.formgroups.map((item,index)=>{
                            return (
                                <FormGroup key={index} {...item.arg}>
                                    <Label {...item.labelarg}></Label>
                                    <Input 
                                        {...item.inputarg}
                                        name={item.key}
                                        onChange={handleChange}
                                    ></Input>
                                    <FormText {...item.formtextarg}></FormText>
                                </FormGroup>
                            )
                        })
                    }
                    <Button {...props.button} onClick={handleSubmit}></Button>
                </Form>
            </Card>
            <Alert color='info' fade={true} isOpen={visible}>你似乎没有给出正确的回家暗号哦</Alert>
        </CenterContainer>
        </>
    );
}

export default LoginForm