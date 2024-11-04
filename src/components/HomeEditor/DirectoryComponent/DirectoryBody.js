import ScrollableContainer from "../../CustomContainer/ScrollableContainer";
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap'
function DirectoryBody(props) {
    return (
        <div style={{ width: '100%', height: '83vh' }}>
            <ScrollableContainer>
                <ListGroup>
                    {
                        props.files.map((item, index) => {
                            return (
                                <ListGroupItem 
                                    key={index} 
                                    className="d-flex justify-content-between align-items-center" 
                                    tag="button"
                                    action
                                    onClick={
                                        ()=>{
                                            //console.log(index)
                                            props.setselectedFile(index)
                                        }
                                    }
                                >
                                    {item.filename}
                                </ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
            </ScrollableContainer>
        </div>
    );
}
export default DirectoryBody;