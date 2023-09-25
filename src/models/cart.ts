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


function calculateCost(products: Product[]) {
	const total = products.reduce((prev, curr) => {
		return prev + curr.price
	}, 0)
	return total
}

function cart() {
	const [products, setProducts] = useState<Product[]>([]);
	const [viewCart, setViewCart] = useState(false)



	return {
		numberOfProducts: products.length,
		setProducts,
		products,
		viewCart,
		setViewCart,
		cartTotal: calculateCost(products)
	}
}

export default cart