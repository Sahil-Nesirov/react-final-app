import React, { useState } from "react";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
// import lineIcons from "../../assets/images/shop/line icons/line.png";
import { PiLineVertical } from "react-icons/pi";

const ProductsShop = () => {
  const data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    description: `This is the description for Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
    image: `https://via.placeholder.com/200?text=Product+${index + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 16;
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = data.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div>
      <div className="shop-filter-container-div">
        <div className="shop-filter-menu">
          <div className="shop-filter-left">
            <div className="filter-icon-text">
              <HiMiniAdjustmentsHorizontal />
              <span>Filter</span>
            </div>
            <HiViewGrid />
            <BsViewList />
            {/* <img src={lineIcons} width="22px" height="10px" alt="" /> */}
            <PiLineVertical />
            <span>Showing {cardsPerPage * (currentPage - 1) + 1}–{Math.min(cardsPerPage * currentPage, data.length)} of {data.length} results</span>
          </div>
          <div className="shop-filter-right">
            <p className="input-show-p">Show</p>
            <input id="input-show" type="text" placeholder="16" />
            <p className="input-sortby-p">Sort by</p>
            <input id="input-sortby" type="text" placeholder="Default" />
          </div>
        </div>
      </div>

      <div className="shop-products-list">
        {currentData.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <div className="info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    // İlk səhifə düyməsini əlavə edirik
    if (currentPage > 2) {
      pages.push(
        <button key="first" onClick={() => onPageChange(1)}>
          1
        </button>
      );
      if (currentPage > 3) {
        pages.push(<span key="dots-before">...</span>); // Nöqtələr
      }
    }

    // Cari səhifənin əvvəlki səhifəsini göstərmək
    if (currentPage > 1) {
      pages.push(
        <button key={currentPage - 1} onClick={() => onPageChange(currentPage - 1)}>
          {currentPage - 1}
        </button>
      );
    }

    // Cari səhifəni göstərmək (disabled)
    pages.push(
      <button key={currentPage} disabled className="active">
        {currentPage}
      </button>
    );

    // Cari səhifədən sonrakı səhifəni göstərmək
    if (currentPage < totalPages) {
      pages.push(
        <button key={currentPage + 1} onClick={() => onPageChange(currentPage + 1)}>
          {currentPage + 1}
        </button>
      );
    }

    // Son səhifəyə qədər olan nöqtələri göstərmək
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        pages.push(<span key="dots-after">...</span>); // Nöqtələr
      }
      pages.push(
        <button key="last" onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {renderPageNumbers()}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};


export default ProductsShop;
