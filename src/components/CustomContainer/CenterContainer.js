import {
    Container
} from "reactstrap";
function CenterContainer(props) {
    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '80vh', maxHeight:'100vh',height:'100%' }}    
        >
            <Container className="d-flex flex-column" style={{ maxWidth: '400px', width: '100%' }}>
                {props.children}
            </Container>
        </Container>
    );
}
export default CenterContainer