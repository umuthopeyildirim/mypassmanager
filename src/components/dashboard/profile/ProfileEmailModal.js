import { Modal, Input, Button } from "react-daisyui";

function ProfileEmailModal({ toogleEmailModal, handleEmailUpdate, setEmail, email }){
    return (
        <Modal open={toogleEmailModal} onClickBackdrop={toogleEmailModal}>
            <Modal.Header className="font-bold">
                Update Email Adress
            </Modal.Header>
        
            <Modal.Body className="items-center text-center">
                <div className="space-y-6">
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="email" placeholder="Email"></Input>
                    <Button onClick={handleEmailUpdate} type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                        Sign in
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ProfileEmailModal;