import {
    Container
} from 'reactstrap'

function FillContainer(props) {
    return (
        <Container 
            fluid="true" 
            style={{ height: '100vh', maxHeight:'100vh',
                width: '100%',maxWidth:'100%',
                overflow: 'hidden'
             }}
        >
            {props.children}
        </Container>
    )
}
export default FillContainer
