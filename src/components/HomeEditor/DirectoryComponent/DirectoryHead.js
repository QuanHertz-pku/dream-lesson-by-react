import {
    Navbar,
    NavbarBrand,
} from "reactstrap"

function DirectoryHead(props) {
    return (
        <div style={{ width: '100%', height: '7vh' }}>
            <Navbar>
                <NavbarBrand>
                    SweetHome
                </NavbarBrand>
            </Navbar>
        </div>
    );
}
export default DirectoryHead;