import { Navbar, Button, Menu, Link } from 'react-daisyui';
import { FaLockOpen } from 'react-icons/fa';

function LandingBar(){
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar>
                <Navbar.Start>
                    <Link href="/">
                    <Button className="text-xl normal-case" color="ghost">
                        <FaLockOpen style={{marginRight:"10px"}} />
                        MyPass Manager
                    </Button>
                    </Link>
                </Navbar.Start>
                <Navbar.Center>
                    <Menu horizontal className="p-0">
                        <Menu.Item>
                            <Link href="about">About</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="features">Features</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="pricing">Pricing</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="contact">Contact</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Button href="login">Go to Dashboard</Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default LandingBar;