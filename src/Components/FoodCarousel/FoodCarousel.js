import React, { useEffect, useState } from "react";
import "./FoodCarousel.css";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import "../../../node_modules/primereact/resources/themes/saga-blue/theme.css";
import "../../../node_modules/primereact/resources/primereact.min.css";
import "../../../node_modules/primeicons/primeicons.css";
import { Link } from "react-router-dom";

const FoodCarousel = () => {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    // productService.getProductsSmall().then(data => setProducts(data.slice(0,9)));
    fetch("https://restaurant-server5.onrender.com/getFood")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const productTemplate = (products) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="p-mb-3">
            <img
              src={`${products.imgURL}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={products.name}
              className="product-image"
            />
          </div>
          <div>
            <h4 className="p-mb-1">{products.name}</h4>
            <h6 className="p-mt-0 p-mb-3">${products.price}</h6>
            {/* <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span> */}
            <div className="car-buttons p-mt-5">
              <Link to="/menu">
                <Button>Order Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel-demo">
      <div className="card">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
          header={
            <h1 className="App orange font">
              <b>Our Food Items</b>
            </h1>
          }
        />
      </div>
    </div>
  );
};

export default FoodCarousel;
