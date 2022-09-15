import { Input, Button } from "react-daisyui";
import { FaKey } from "react-icons/fa";
function DashboardPasswordList({ passwords, setSelectedPassword, handleToogleAddNewPassword }) {
    if(passwords == undefined){
        return returnNull({ passwords, handleToogleAddNewPassword });
    }
    if(passwords._document == null){
        return returnNull({ passwords, handleToogleAddNewPassword });
    }
    if(passwords.data() > 0) {
        return returnList({ passwords, setSelectedPassword, handleToogleAddNewPassword });
    }
}

function returnNull({ passwords, handleToogleAddNewPassword }) {
    return(
        <>
            {passwords ?
            <>
                <div className="bg-slate-50 text-gray-800 max-w-screen-md w-2/6 h-screen px-6 py-6 border-t border-r space-y-2.5">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-semibold">Passwords</h1>
                        <button onClick={handleToogleAddNewPassword} className="bg-slate-500 text-white rounded-md px-4 py-2">Add Password</button>
                    </div>
                    <div className="flex justify-between">
                        <Input className="rounded-md w-full" type="text" placeholder="Search for a password" />
                    </div>
                    <article className="h-[90%] overflow-scroll" >
                        <ul className="bg-slate-50 flex flex-col space-y-3" >
                            <li className="flex justify-center items-center">
                                Add new password by clicking the button above.
                            </li>
                        </ul>
                    </article>
                </div>
            </>
            :
            <>
                <div className="bg-slate-50 text-gray-800 max-w-screen-md w-2/6 h-screen px-6 py-6 border-t border-r space-y-2.5">
                    <h1>Loading...</h1>
                </div>
            </>
            }
        </>
    );
}

function returnList({ passwords, setSelectedPassword, handleToogleAddNewPassword }) {
    const CapitalizeFirstLetter = (str) => {
        return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
    }
    return(
        <>
            {passwords ?
            <>
                <div className="bg-slate-50 text-gray-800 max-w-screen-md w-2/6 h-screen px-6 py-6 border-t border-r space-y-2.5">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-semibold">Passwords</h1>
                        <button onClick={handleToogleAddNewPassword} className="bg-slate-500 text-white rounded-md px-4 py-2">Add Password</button>
                    </div>
                    <div className="flex justify-between">
                        <Input className="rounded-md w-full" type="text" placeholder="Search for a password" />
                    </div>
                    <article className="h-[90%] overflow-scroll" >
                        <ul className="bg-slate-50 flex flex-col space-y-3" >
                            {
                                passwords.data().passwords.map((element, key) => {
                                    return(
                                    <li key={key} onClick={() => setSelectedPassword(key)}>
                                        <Button color="accent" className="menu-link w-full">
                                            <div className="flex justify-between">
                                                <div className="flex text-white">
                                                    <FaKey className="text-2xl mr-2" />
                                                    <h1 className="text-lg font-semibold">{CapitalizeFirstLetter(element.name)}</h1>
                                                </div>
                                            </div>
                                        </Button>
                                    </li>
                                    );
                                })
                            }
                        </ul>
                    </article>
                </div>
            </>
            :
            <>
                <div className="bg-slate-50 text-gray-800 max-w-screen-md w-2/6 h-screen px-6 py-6 border-t border-r space-y-2.5">
                    <h1>Loading...</h1>
                </div>
            </>
            }
        </>
    );
}

export default DashboardPasswordList;