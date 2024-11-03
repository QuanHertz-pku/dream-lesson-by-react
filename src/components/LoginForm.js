import react from 'react'
import {
    Input,
    Label,
    Form,
    FormGroup,
    Button,
    FormText,
    Card
} from 'reactstrap'

import LoginFormProps from '@/props/componentprops/LoginFormProps'
import CenterContainer from './CustomContainer/CenterContainer';

const {formgroups,button,card} = LoginFormProps;
function LoginForm(){

    return (
        <>
        <CenterContainer>
            <Card {...card}>
                <h3>SweetHome</h3>
                <Form>
                    {
                        formgroups.map((item,index)=>{
                            return (
                                <FormGroup key={index} {...item.arg}>
                                    <Label {...item.labelarg}></Label>
                                    <Input {...item.inputarg}></Input>
                                    <FormText {...item.formtextarg}></FormText>
                                </FormGroup>
                            )
                        })
                    }
                    <Button {...button}></Button>
                </Form>
            </Card>
        </CenterContainer>
        </>
    );
}

export default LoginForm