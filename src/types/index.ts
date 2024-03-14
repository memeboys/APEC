import { GetRef, Input } from "antd";

export type InputRef = GetRef<typeof Input>;

export interface DataType {
  key: string;
  name: string;
  date: string;
  checkbox: boolean;
  number: number;
  name2: string;
  date2: string;
  number2: number;
  checkbox2: boolean;
}

export type DataIndex = keyof DataType;