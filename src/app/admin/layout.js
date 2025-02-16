import Image from "next/image";
import Sidebar from "../../../Components/AdminComponents/Sidebar";
import { assets } from "../../../Assets/assets";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function layout({children}){
    return (
        <>
        <div className="flex">
        <ToastContainer theme="dark"/>
            <Sidebar/>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border border-b-black">
                <h3 className="font-medium">Admin Panel</h3>
                    <Image src={assets.profile_icon} alt="" width={40}/>
                </div>
                {children}
            </div>
        </div>
        
        </>
    )
}