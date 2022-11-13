import { Modal, Input, Button } from "react-daisyui";

function ProfilePasswordModal({ tooglePasswordModal, handlePasswordUpdate, setPassword, password }){
    return (
        <Modal open={tooglePasswordModal} onClickBackdrop={tooglePasswordModal}>
            <Modal.Header className="font-bold">
                Update Password
            </Modal.Header>
        
            <Modal.Body className="items-center text-center">
                <div className="space-y-6">
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Password"></Input>
                    <Button onClick={handlePasswordUpdate} type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                        Change Password
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ProfilePasswordModal;