const data = {
  "2022-09-16": 5,
  "2022-09-23": 1,
  "2022-09-26": 1,
  "2022-09-28": 2,
  "2022-09-30": 6,
  "2022-10-04": 1,
  "2022-10-05": 2,
  "2022-10-10": 1,
  "2022-10-12": 1,
  "2022-10-13": 2,
  "2022-10-20": 4,
  "2022-10-21": 14,
  "2022-10-21": 1,
};
const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let final = {
  total: 0,
  labels: [],
  points: [],
};
export const fun = () => {
  let total = 0;
  let rev = {};
  for (const [key, value] of Object.entries(data)) {
    const month = monthList[new Date(key).getMonth()];
    total += value;
    if (rev[month]) {
      rev[month] += value;
    } else {
      rev[month] = value;
    }
  }
  final.total = total;
  for (const [key, value] of Object.entries(rev)) {
    final.labels.push(key);
    final.points.push(value);
  }
  return final;
};
