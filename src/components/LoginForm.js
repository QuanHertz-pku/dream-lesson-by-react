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

import CenterContainer from './CustomContainer/CenterContainer';

function LoginForm(props){

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
                                    <Input {...item.inputarg}></Input>
                                    <FormText {...item.formtextarg}></FormText>
                                </FormGroup>
                            )
                        })
                    }
                    <Button {...props.button}></Button>
                </Form>
            </Card>
        </CenterContainer>
        </>
    );
}

export default LoginForm