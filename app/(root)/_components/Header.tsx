import Image from "next/image"
import SearchComponent from "./SearchComponent"
import UserNav from "./UserNav"

const Header = () => {
  return (
    <header className="border-b py-6 px-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
          <Image
            src={"/airbnb-desktop.png"}
            alt="logo"
            width={120}
            height={100}
            objectFit="contain"
            objectPosition="left"
            className="hidden sm:block"
          />
          <Image
            src={"/airbnb-mobile.webp"}
            alt="logo"
            width={45}
            height={45}
            objectFit="contain"
            objectPosition="left"
            className="sm:hidden"
          />
        <SearchComponent />
        <UserNav />
      </div>
    </header>
  )
}
export default Header
