export default ({ filter, action }) => {
	action('files.upload', async (meta, context) => {
		console.log("hello");
		const { getStorage } = await import('@directus/api/storage/index');
		const storage = await getStorage();
		console.log(storage);
	});
};
