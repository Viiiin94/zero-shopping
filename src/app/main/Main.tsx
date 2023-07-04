import { useAppSelector } from "../../hooks/useRedux";

const Main = () => {
  const product = useAppSelector((state) => state.product.products);

  const clo = product.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  const jew = product.filter((item) => item.category === "jewelery");
  const ele = product.filter((item) => item.category === "electronics");

  console.log(jew);

  return <div>Main</div>;
};

export default Main;
