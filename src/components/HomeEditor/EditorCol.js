import {
    Row,
    Col
} from 'reactstrap'

import EditorComponent from './EditorComponent/EditorComponent';
import ScrollableContainer from '../CustomContainer/ScrollableContainer';

function EditorCol(props) {
    return (
        <>
            <Row style={{ height: '100%' }}>
                    <Col xs='10' style={{
                        height: '100vh',
                        overflowY: 'auto'
                    }}>
                        <ScrollableContainer>
                            <EditorComponent  {...props}/>
                        </ScrollableContainer>
                    </Col>
                <Col xs='2'
                    style={{
                        height: '100vh',
                        overflowY: 'auto'
                    }}
                >
                    待实现的右侧边栏
                </Col>
            </Row>
        </>
    );
}

export default EditorCol;