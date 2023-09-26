import { Link } from "react-router-dom";

import { AiOutlineShopping } from "react-icons/ai";

const ShoppingCart = () => {
  return (
    <div>
      <Link to="/cart">
        <AiOutlineShopping size={30} />
      </Link>
    </div>
  );
};

export default ShoppingCart;
