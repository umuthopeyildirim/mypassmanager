import { Navbar, Button, Link, Dropdown } from 'react-daisyui';
import { FaLockOpen } from 'react-icons/fa';

function DashboardBar({ logout, user, page }){
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar>
                <Navbar.Start>
                    <Link href="/dashboard">
                    <Button className="text-xl normal-case" color="ghost">
                        <FaLockOpen style={{marginRight:"10px"}} />
                        MyPass Manager
                    </Button>
                    </Link>
                </Navbar.Start>
                    <h1 className="text-2xl font-semibold select-none">{page}</h1>
                <Navbar.End>
                    <Dropdown vertical="end">
                        <Button color="ghost" className="avatar" shape="circle">
                            <div className="w-10 rounded-full">
                                <img referrerPolicy="no-referrer" alt={user.displayName} src={user.photoURL}/>
                            </div>
                        </Button>
                        <Dropdown.Menu className="w-52 menu-compact">
                            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default DashboardBar;