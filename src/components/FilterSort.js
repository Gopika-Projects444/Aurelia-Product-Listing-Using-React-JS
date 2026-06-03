import React from "react";

function FilterSort({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  resetFilters
}) {
  return (
    <div className="filter-sort">

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
      >
        <option value="all">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Accessories">Accessories</option>
        <option value="Education">Education</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(e.target.value)
        }
      >
        <option value="">Sort By</option>
        <option value="priceLow">
          Price Low → High
        </option>
        <option value="priceHigh">
          Price High → Low
        </option>
        <option value="nameAZ">
          Name A-Z
        </option>
        <option value="nameZA">
          Name Z-A
        </option>
      </select>

      <button onClick={resetFilters}>
        Reset
      </button>

    </div>
  );
}

export default FilterSort;