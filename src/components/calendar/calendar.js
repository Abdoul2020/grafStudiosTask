import dayjs from "dayjs";

export const generateDate = (
	month = dayjs().month(),
	year = dayjs().year()
) => {
	
	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
	const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    console.log("firstDate:", firstDateOfMonth)
    console.log("last Date::", lastDateOfMonth)


	const arrayOfDate = [];

    console.log("arrayofDtae:", arrayOfDate)

	// generate current date
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		});
	}

	
	return arrayOfDate;
};

export const months = [
	"Oca",
	"Şub",
	"Mar",
	"Nis",
	"May",
	"Haz",
	"Tem",
	"Ağu",
	"Eyl",
	"Eki",
	"Kas",
	"Ara",
];
