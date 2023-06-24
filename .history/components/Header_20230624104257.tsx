import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href={"/"}>
          <span className="font-semibold text-xl tracking-tight">
            Golden Stocks.
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white"></button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <Link
            href="/highVolumeWithPercent"
            className="block mt-4 lg:inline-block lg:mt-0  text-white hover:bg-white hover:p-2 hover:rounded-md hover:text-black mr-4"
          >
            High Volume with Percentage
          </Link>
          <Link
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-white hover:p-2 hover:rounded-md hover:text-black mr-4"
          >
            Percentage
          </Link>
          <Link
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-white hover:p-2 hover:rounded-md hover:text-black mr-4"
          >
            Volume
          </Link>

          <Link
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-white hover:p-2 hover:rounded-md hover:text-black mr-4"
          >
            Penny Stocks with N
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
