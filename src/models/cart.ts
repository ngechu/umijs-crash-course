import { useState } from "react"

interface Product {
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
}
function cart() {
	const [products, setProducts] = useState<Product[]>([]);

	return {
		numberOfProducts: products.length,
		setProducts,
		products

	}
}

export default cart