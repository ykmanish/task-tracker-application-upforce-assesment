import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-20">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <button
            onClick={handlePrevious}
            className={`flex ${currentPage === 1 ? "disabled opacity-50" : "bg-white"} small items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 border border-e-0 border-gray-300 rounded-s-lg`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`flex small items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 ${
                  currentPage === index + 1 ? "bg-[#0c0c0c] text-white" : "bg-white hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <button
            onClick={handleNext}
            className={`flex ${currentPage === totalPages ? "disabled opacity-50" : "bg-white"} small items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 rounded-e-lg`}
          >
            Next
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
