import { Modal, Button } from "react-daisyui";

function ProfileDeleteUserModal({ toogleDeleteUserModal, handleDeleteUser }){
    return (
        <Modal open={toogleDeleteUserModal} onClickBackdrop={toogleDeleteUserModal}>
            <Modal.Header className="font-bold">
                Delete Account
            </Modal.Header>
        
            <Modal.Body className="items-center text-center">
                <div className="space-y-6">
                    <p className="text-xl">Are you sure you want to delete your account?</p>
                    <Button onClick={toogleDeleteUserModal} type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                        No
                    </Button>
                    <Button onClick={handleDeleteUser} type="submit" color="error" className="w-full flex justify-center text-white p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                        Delete my account and all passwords MyPass stores
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ProfileDeleteUserModal;