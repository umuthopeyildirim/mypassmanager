import { Button } from "react-daisyui";
import { FaLockOpen } from 'react-icons/fa';

function AuthBar(){
    return (  
        <>
            <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">
                <svg className="relative block " style={{width: 'calc(100% + 10px)'}} data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                </svg>
            </div>
            <div className="bg-transparent fixed w-full top-0 left-0 z-30 text-white">
                <div className="container p-5 mx-auto flex items-center justify-between">
                    <div className="flex mx-auto">
                        <Button href="/" className="text-xl normal-case" color="ghost">
                            <FaLockOpen style={{marginRight:"10px"}} />
                            MyPass Manager
                        </Button>
                    </div>
                </div>
            </div>
        </> 
    );
}


export default AuthBar;