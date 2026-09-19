import SearchBar from "./SearchBar";

interface HeaderProps {
  onSearch: (value: string) => void;
}

function Header({ onSearch }: HeaderProps) {
  return (
    <header
      className="
        h-[280px]
        bg-[url('/images/pattern-bg-desktop.png')]
        bg-cover
        bg-center
        pt-[30px]
        text-center
        max-md:bg-[url('/images/pattern-bg-mobile.png')]
      "
    >
      <h1 className="mb-[25px] text-[28px] font-medium text-white">
        IP Address Tracker
      </h1>

      <SearchBar onSearch={onSearch} />
    </header>
  );
}

export default Header;