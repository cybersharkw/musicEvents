import { Button } from "../ui/button";
import { Input } from "../ui/input";
import logo from '../../../public/logo/eventLogo.png'
import Image from "next/image";
function Header (){

return (

    <header className='flex sticky h-auto w-[80%] mx-auto my-6 p-2'>
            <nav className='flex flex-row items-center h-16 w-full justify-between'>
                <ul className='flex items-center gap-2'>
                    <Image src={logo} alt="liveMusic" className="w-16 h-16 object-contain" />
                    <span className='text-xl font-semibold font-stretch-normal'>LiveMusic</span>
                </ul>
                <ul className='flex items-center w-[60%] gap-2'><Input /></ul>
                <ul className='flex items-center gap-2' >
                </ul>
                <ul className='flex items-center gap-2'>
                    <Button>Anmelden
                    </Button>
                </ul>
            </nav>
        </header>
)

}

export default Header;