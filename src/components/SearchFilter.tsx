"use client";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortOption: string;
  onSortChange: (value: string) => void;
}

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  sortOption,
  onSortChange,
}: SearchFilterProps) {
  return (
    <div className="bg-white  rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search Input */}
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700  mb-2"
          >
            Search Rings
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by name, category, or description..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300  rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white  text-gray-900  placeholder-gray-500 "
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div>
          <label
            htmlFor="sort"
            className="block text-sm font-medium text-gray-700  mb-2"
          >
            Sort By
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300  rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white  text-gray-900 "
          >
            <option value="name">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="date">Date Added</option>
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {(searchTerm || sortOption !== "name") && (
        <div className="mt-4 pt-4 border-t border-gray-200 ">
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 /30 text-amber-800 ">
                Search: {searchTerm}
                <button
                  onClick={() => onSearchChange("")}
                  className="ml-2 text-amber-600  hover:text-amber-800 "
                >
                  ×
                </button>
              </span>
            )}
            {sortOption !== "name" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 /30 text-blue-800 0">
                Sort: {sortOption}
                <button
                  onClick={() => onSortChange("name")}
                  className="ml-2 text-blue-600  hover:text-blue-800 "
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
