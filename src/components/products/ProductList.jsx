
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextPovider";
import search1 from "../../assets/icons/search.svg"
import "../../styles/search.css"




const ProductList = () => {
  const { getProducts, fetchByParams, search } = useProducts();
  const [stateSearch, setSearch] = useState('')



  // useEffect(()=>{
  //   setSearch()
  // }, [search])


  // const [searchParams, setSearchParams] = useSearchParams()

  // const [search, setSearch] = useState(searchParams.get("q") || "")
  
  // useEffect(()=>{
  //   setSearchParams({
  //     q: search
  //   })
  // }, [search])

  // useEffect(() => {
  //   getProducts()
  // },[searchParams])

  // useEffect(() => {
  //   getProducts()
  // },[])




  return (
    <div>
      <div className="search_box">
<input type="text"  className="input_search" value={stateSearch}
        onChange={(e) => setSearch(e.target.value)}/>
<div className="search_img"><img src={search1} alt="" /></div>
</div>
    </div>
  );
};

export default ProductList;
