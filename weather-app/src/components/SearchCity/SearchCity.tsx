"use client";
import { useState } from "react";

interface ISearchCityProps {
  onSearch: (city: string) => void;
}

function SearchCity({ onSearch }: ISearchCityProps) {
  const [cityInput, setCityInput] = useState<string>("");

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cityInput.trim()) {
      onSearch(cityInput);
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название города"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Поиск
        </button>
      </div>
    </form>
  );
}

export default SearchCity;
