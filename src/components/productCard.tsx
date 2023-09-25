import { Link } from "react-router-dom";
import { useModel } from "umi";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { setProducts, products } = useModel("cart");

  return (
    <div className="group relative">
      {products.some((e) => e.id === product.id) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" text-red-500 w-8 h-8 absolute top-0 right-2 z-50 cursor-pointer hover:text-red-800"
          onClick={(e) => {
            const removedProductArray = products.filter(
              (e) => e.id != product.id
            );
            setProducts(removedProductArray);
          }}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" text-blue-500 w-8 h-8 absolute top-0 right-2 z-50 cursor-pointer hover:text-blue-700"
          onClick={(e) => {
            setProducts((prevState) => {
              return [...prevState, product];
            });
          }}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <Link to={`/products/${product.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
          <img
            src={product.image}
            alt={product.description}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <p>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {product.title}
              </p>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
