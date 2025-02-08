"use client";
import { useState } from "react";

interface ISearchCityProps {
  addInput: (city: string) => void;
}

function SearchCity({ addInput }: ISearchCityProps) {
  const [cityInput, setCityInput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cityInput) return;

    addInput(cityInput);
  };

  return (
    <form onSubmit={handleSubmit}>
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
