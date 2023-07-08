export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "men's clothing" | "women's clothing" | "jewelery" | "electronics";
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}[];

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "men's clothing" | "women's clothing" | "jewelery" | "electronics";
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
