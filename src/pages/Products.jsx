import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FilterComponent } from "../components/FilterComponent";
import { ProductSimple } from "../components/ProductSimple";
import { getData } from "../Redux/products/action";
// import {Box} from '@chakra-ui/react'

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productsData.products);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (products?.length === 0) {
      let params = {
        category: searchParams.getAll("category"),
      };
      getData(dispatch, params);
    }
  }, [dispatch, products?.length, searchParams]);
  console.log(products);
  return (
    <Box>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
        <Box minWidth={"15rem"}>
          <FilterComponent />
        </Box>
        <Box>
          <Heading as="h3">Products</Heading>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products.map((product) => {
              return (
                <ProductSimple
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
