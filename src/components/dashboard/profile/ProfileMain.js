import { Hero, Card, Avatar, ButtonGroup, Button } from "react-daisyui";

function ProfileMain({ user, toogleEmailModal, toogleDeleteUserModal, tooglePasswordModal, tooglePPModal }) {
    return (
        <Hero className="px-9 py-9">
            <Hero.Content className="flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left flex-shrink-0 w-full max-w-sm space-y-4 pr-2.5">
                    <div className="flex flex-col space-y-4">
                        <div className="rounded border-2 px-4 py-4">
                            <h1 className="text-gray-500">Email Adress</h1>
                            <p className="text-1xl font-bold">{user.email}</p>
                        </div>
                    </div>
                    <div className='overflow-x-auto flex flex-col px-1 py-1'>
                        <Button onClick={toogleDeleteUserModal} color="error" size="lg">
                            Delete Account
                        </Button>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full max-w-sm space-y-4 pr-2.5">
                    <Card>
                        <Card.Body className="items-center text-center">
                            <Avatar referrerPolicy="no-referrer" src={user.photoURL} shape="square"/>
                            <Card.Title tag="h2">{user.displayName}</Card.Title>
                            <Card.Actions className="justify-end">
                                {/* <Button onClick={tooglePPModal} color="primary">Edit Details</Button> */}
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                    <ButtonGroup vertical="true">
                        <Button onClick={toogleEmailModal}>Change Email</Button>
                        <Button onClick={tooglePasswordModal}>Change Password</Button>
                    </ButtonGroup>
                </div>
            </Hero.Content>
        </Hero>
    );
}

export default ProfileMain;