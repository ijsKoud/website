export const getAge = (): number => {
	const bday = new Date("12 February 2006").getFullYear();
	const current = new Date().getFullYear();

	return current - bday;
};
