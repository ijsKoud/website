export const getAge = (): number => {
	const bday = Date.parse(new Date("12 February 2006").toString());
	const current = Date.now();
	const sumOfTime = 3.156e10;

	return (current - bday) / sumOfTime;
};
