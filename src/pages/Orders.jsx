import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductSimple } from "../components/ProductSimple";
import { fetchOrders } from "../Redux/products/action";

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.productsData.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  return (
    <Box>
      <Heading as="h2" size="xl" textAlign={"center"}>
        Your Orders
      </Heading>
      <Box>
        {orders.map((product) => {
          return (
            <ProductSimple 
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </Box>
    </Box>
  );
};
