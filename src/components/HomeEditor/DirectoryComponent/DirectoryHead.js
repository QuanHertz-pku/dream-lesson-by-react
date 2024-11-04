import {
    Button,
    Navbar,
    NavbarBrand,
} from "reactstrap"

import AddFileServer from "../../../servers/FileServer/AddFileServer";

function DirectoryHead(props) {
    const onAdd = () => {
        AddFileServer();
        window.location.reload()
    }

    return (
        <div style={{ width: '100%', height: '7vh' }}>
            <Navbar>
                <NavbarBrand>
                    Home~
                </NavbarBrand>
                <Button color="primary" onClick={onAdd}>+</Button>
            </Navbar>
        </div>
    );
}
export default DirectoryHead;