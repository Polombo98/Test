export interface IBook {
	volumeInfo: {
		title: string,
		publishedDate: string,
		[key: string]: unknown,
	}
	[key: string]: unknown
}