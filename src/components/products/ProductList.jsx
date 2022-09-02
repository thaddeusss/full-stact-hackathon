import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextPovider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, pages } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>

      <Box>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={pages}
          variant="outlined"
          color="primary"
          onChange={(e, page) => setCurrentPage(page)}
          page={currentPage}
        />
      </Box>
    </div>
  );
};

export default ProductList;
