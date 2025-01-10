declare global {
	type User = {
		id: number;
		firstName: string;
		lastName: string;
		email: string;
		role: string;
		image: string;
	};

	type Post = {
		id: number;
		title: string;
		body: string;
		tags: string[];
		views: number;
		userId: number;
	};
}
