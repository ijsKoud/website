export const getAge = (): number => {
	const bday = Date.parse(new Date("12 February 2006").toString());
	const current = Date.now();
	const sumOfTime = 365 * 60 * 60 * 24 * 1e3;

	return (current - bday) / sumOfTime;
};
