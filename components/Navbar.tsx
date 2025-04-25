// components/Navbar.tsx
import Image from "next/image";
import logo from "../assets/logo.svg";
import dropdown from "../assets/chevron-down.svg";
import CustomButton from "./ui/Button";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-[1440px]">
        <div className="px-[80px] relative flex h-16 items-center justify-between">

          {/* Logo y links */}
          <div className="flex w-[586px] h-[32px] gap-[40px] items-center px-[32px]">
            <div className="flex shrink-0 items-center ">
              <Image className="" src={logo} alt="Untitled UI" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="font-inter font-semibold text-base leading-6 tracking-normal text-[#475467] hover:text-gray-900 px-4 py-2"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="font-inter font-semibold text-base leading-6 tracking-normal text-[#475467] hover:text-gray-900 px-4 py-2 flex gap-2"
                >
                  Products
                  <Image src={dropdown} alt="Dropdown Icon" />
                </a>
                <a
                  href="#"
                  className="font-inter font-semibold text-base leading-6 tracking-normal text-[#475467] hover:text-gray-900 px-4 py-2 flex gap-2"
                >
                  Resources
                  <Image src={dropdown} alt="Dropdown Icon" />
                </a>
                <a
                  href="#"
                  className="font-inter font-semibold text-base leading-6 tracking-normal text-[#475467] hover:text-gray-900 px-4 py-2"
                >
                  Pricing
                </a>
              </div>
            </div>
          </div>

          {/* Notificaciones y perfil */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:pr-0">
            <div className=" flex relative gap-3 mr-[32px]">
              <CustomButton variant="secondary">Log In</CustomButton>
              <CustomButton>Sign Up</CustomButton>
              {/* Dropdown - puedes manejar el open con estado */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
