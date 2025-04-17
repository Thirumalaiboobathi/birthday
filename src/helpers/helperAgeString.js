export default function getAgeString(dob) {
    if (typeof dob !== 'string') return '';
    //extract the year, month, and date from user date input
    dob = new Date(dob.split('/')?.reverse()?.join('-'));

    var dobYear = dob.getYear();
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();

    //get the current date from the system
    var now = new Date();
    //extract the year, month, and date from current date
    var currentYear = now.getYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    //declare a variable to collect the age in year, month, and days
    var age = {};
    var ageString = "";

    //get years
    var yearAge = currentYear - dobYear;

    //get months
    var monthAge;
    if (currentMonth >= dobMonth)
        //get months when current month is greater
        monthAge = currentMonth - dobMonth;
    else {
        yearAge--;
        monthAge = 12 + currentMonth - dobMonth;
    }

    //get days
    var dateAge;
    if (currentDate >= dobDate)
        //get days when the current date is greater
        dateAge = currentDate - dobDate;
    else {
        monthAge--;
        dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }
    //group the age in a single variable
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };


    if ((age.years > 0) && (age.months > 0))
        ageString = age.years + (age.years === 1 ? " year and " : " years and ") + age.months + (age.months === 1 ? " month" : " months");
    else if ((age.years === 0) && (age.months === 0) && (age.days > 0))
        ageString = age.days + (age.days === 1 ? " day" : " days");
    //when current month and date is same as birth date and month
    else if ((age.years > 0) && (age.months === 0))
        ageString = age.years + (age.years === 1 ? " year" : " years");
    // else if ( (age.years > 0) && (age.months > 0))
    //    ageString = age.years + (age.years===1?" year and ":" years and ") + age.months + (age.months==1?" month":" months");
    // else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    //    ageString = age.months + " months and " + age.days + " days";
    // else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    //    ageString = age.years + " years, and" + age.days + " days";
    else if ((age.years === 0) && (age.months > 0)) { ageString = age.months + (age.months === 1 ? " month" : " months"); }
    //when current date is same as dob(date of birth)
    else ageString = "";
    return ageString;
}

export function convertToPascalCase(string) {
    if (!!string)
        return string[0].toUpperCase() + string.substring(1, string.length);
    return string;
}