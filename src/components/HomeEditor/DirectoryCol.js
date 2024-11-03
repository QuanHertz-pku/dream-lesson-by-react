import DirectoryBody from "./DirectoryComponent/DirectoryBody";
import DirectoryHead from "./DirectoryComponent/DirectoryHead";
import DirectoryFoot from "./DirectoryComponent/DirectoryFoot";
import ScrollableContainer from "../CustomContainer/ScrollableContainer";
function DirectoryCol(props) {
    return (
        <div>
            <DirectoryHead/>
            <ScrollableContainer>
                <DirectoryBody {...props}/>
            </ScrollableContainer>
            <DirectoryFoot/>
        </div>
    );
}

export default DirectoryCol;