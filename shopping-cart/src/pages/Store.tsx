import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/item.json";

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

export const Store = () => {
  // const [storeItems, setStoreItems] = useState<Product[]>([]);

  // useEffect(() => {
  //   // Mock e-commerce api
  //   fetch("https://fakestoreapi.com/products?limit=5")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       if (json != null) setStoreItems(json);
  //     });
  // }, []);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={2} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            {<StoreItem  {...item}/>}
          </Col>
        ))}
      </Row>
    </>
  );
};
