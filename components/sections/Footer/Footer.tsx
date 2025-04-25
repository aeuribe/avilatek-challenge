import Image from "next/image";
import Link from "next/link";
import AppStoreImg from "../../../assets/google-playstore.svg";
import GooglePlayImg from "../../../assets/app-store.svg";
import logo from "../../../assets/logo.svg"; 

const columns = [
  {
    title: "Product",
    links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "News", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials"],
  },
  {
    title: "Social",
    links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "Dribbble"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-sm font-bold text-gray-900">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link} className="text-[#6941C6] font-semibold text-base leading-6 tracking-normal font-inter">
                    <Link href="#" className="hover:underline">
                      {link}
                      {link === "Solutions" && (
                        <span className="ml-2 px-1.5 py-0.5 text-[10px] uppercase border border-[#6C47FF] text-[#6941C6] rounded font-semibold text-base leading-6 tracking-normal font-inter">
                          New
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900">Get the app</h4>
            <div className="space-y-3">
              <Image
                src={AppStoreImg}
                alt="App Store"
                className="rounded-md w-32"
              />
              <Image
                src={GooglePlayImg}
                alt="Google Play"
                className="rounded-md w-32"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              className=""
            />
          </div>
          <div className="text-[#667085] font-normal text-base leading-6 tracking-normal font-inter">
            © 2077 Untitled UI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
