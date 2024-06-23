import Image from "next/image"
import SearchComponent from "./SearchComponent"
import UserNav from "./UserNav"

const Header = () => {
  return (
    <header className="border-b py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="relative h-10 w-40">
          <Image
            src={"/airbnb-desktop.png"}
            alt="logo"
            fill
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <SearchComponent />
        <UserNav />
      </div>
    </header>
  )
}
export default Header
