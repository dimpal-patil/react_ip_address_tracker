import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    const value = inputValue.trim();

    if (value === "") {
      setError("Please enter an IP address or domain");
      return;
    }

    setError("");
    onSearch(value);
  };

  return (
    <div className="mx-auto w-[550px] max-w-[calc(100%-40px)]">
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search for any IP address or domain"
          className="
            w-full
            rounded-l-[10px]
            border-none
            px-[18px]
            py-[18px]
            text-base
            outline-none
          "
        />

        <button
          type="button"
          onClick={handleSearch}
          className="
            w-[55px]
            shrink-0
            rounded-r-[10px]
            bg-black
            text-xl
            text-white
            hover:bg-blue-600
          "
        >
          &gt;
        </button>
      </div>

      {error && (
        <p className="mt-[5px] text-left text-sm font-bold text-white">
          {error}
        </p>
      )}
    </div>
  );
}

export default SearchBar;