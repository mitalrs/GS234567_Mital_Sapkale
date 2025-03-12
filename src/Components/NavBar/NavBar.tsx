import logo from "../../assets/Gsynergy.svg";
import { CircleUser,ChevronDown } from 'lucide-react';


const NavBar = () => {
    return (<div className="flex justify-between pr-4 h-30 items-center">
        <div className="w-[200px]">
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="logo"
                        data-testid="logo-img"
                        className="h-20 w-full object-contain"
                    />
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-5xl font-[500]">Data Viewer App</h1>
        </div>
        <div className="flex items-center gap-4">
            <CircleUser data-testid="circle-user-icon"/>
            <ChevronDown data-testid="chevron-down-icon"/>
        </div>
    </div>);
}

export default NavBar;