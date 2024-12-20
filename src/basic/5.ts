enum DayOfWeek {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

const isWeekend = (day: string) => {
  switch (day) {
    case "Monday":
      return false;
    case "Tuesday":
      return false;
    case "Wednesday":
      return false;
    case "Thursday":
      return false;
    case "Friday":
      return false;
    case "Saturday":
      return true;
    case "Sunday":
      return true;
    default:
      return "There is no such day";
  }
};

console.log(isWeekend(DayOfWeek.sunday));
