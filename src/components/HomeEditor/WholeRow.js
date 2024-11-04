import {
    Row,
    Col,
} from 'reactstrap'
import React,{useEffect, useState} from 'react';

import FillContainer from '../CustomContainer/FillContainer';
import DirectoryCol from './DirectoryCol';
import EditorCol from './EditorCol';
function WholeRow(props) {
    const [selectedFile,setselectedFile] = useState(0);
    useEffect(()=>{
        console.log("wholerow",props)
    },[selectedFile])
    return (
        <FillContainer>
            <Row>
                <Col xs="2" >
                    <DirectoryCol selectedFile={selectedFile} setselectedFile={setselectedFile} {...props}/>
                </Col>
                <Col xs="10">
                    <EditorCol selectedFile={selectedFile} {...props}/>
                </Col>
            </Row>
        </FillContainer>
    );
}

export default WholeRow;