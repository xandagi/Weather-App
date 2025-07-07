import React from "react";

function SearchInput({ city, setCity, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ padding: "10px", marginRight: "10px", fontSize: "16px" }}
      />
      <button onClick={onSearch} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;
