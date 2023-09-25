export async function getAllProducts() {
	const response = await fetch(`${BASE_URL}/products`);
	const data = await response.json();
	return data;

}

export async function getSingleProduct(id) {
	const response = await fetch(`${BASE_URL}/products/${id}`);
	const data = await response.json();
	return data;

}