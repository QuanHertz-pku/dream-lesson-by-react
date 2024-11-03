import DirectoryBody from "./DirectoryComponent/DirectoryBody";
import DirectoryHead from "./DirectoryComponent/DirectoryHead";
import DirectoryFoot from "./DirectoryComponent/DirectoryFoot";
function DirectoryCol(props) {
    return (
        <div>
            <DirectoryHead/>
            <DirectoryBody {...props}/>
            <DirectoryFoot/>
        </div>
    );
}

export default DirectoryCol;