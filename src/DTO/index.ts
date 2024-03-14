import { DataType } from "../types";

const data: DataType[] = [];
for (let i = 0; i <= 2000; i++) {
  data.push({
    key: i.toString(),
    name: "John Brown" + i,
    date: "2024-03-04",
    number: i + 1,
    checkbox: true,
    name2: "John Brown" +i +i,
    date2: "2024-03-04",
    number2: i - 10,
    checkbox2: true,
  });
}
export default data;