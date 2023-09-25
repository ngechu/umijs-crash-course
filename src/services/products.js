export async function getAllProducts() {
	const response = await fetch(`${BASE_URL}/products`);
	const data = await response.json();
	console.log("XXXXXXXXXX", data);
	return data;
}