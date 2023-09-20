export async function getAllTodos() {
	const data = await fetch(`${BASE_URL}/todos`)
	console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXX", data)
	return
}