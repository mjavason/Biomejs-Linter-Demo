import axios from "axios";

export async function pingSelf(url: string) {
	try {
		const { data } = await axios.get(url);
		console.log(`Server pinged successfully: ${data.message}`);
		return true;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.error(`Error pinging server: ${e.message}`);
		return false;
	}
}
