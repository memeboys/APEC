import { useState } from "react";

import { Checkbox, CheckboxOptionType, TableColumnsType } from "antd";
import { Table } from "antd";

import { DataType } from "../types";

import data from "../DTO/index";

import { useSearch } from "../utils/useSearch";

const App: React.FC = () => {

  const columns: TableColumnsType<DataType> = [
    {
      title: "Строка",
      dataIndex: "name",
      key: "name",
      width: "10%",
      ...useSearch("name"),
      sorter: (a: DataType, b: DataType) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
      width: "10%",
      ...useSearch("date"),
      sorter: (a: DataType, b: DataType) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Число",
      dataIndex: "number",
      key: "number",
      width: "10%",
      ...useSearch("number"),
      sorter: (a: DataType, b: DataType) => a.number - b.number,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Чек",
      dataIndex: "checkbox",
      key: "checkbox",
      width: "3%",
      render: (_value, _record, _rowIndex) => (
        <Checkbox
          key={_rowIndex}
        />
      )
    },

    {
      title: "Строка2",
      dataIndex: "name2",
      key: "name2",
      width: "10%",
      ...useSearch("name2"),
      sorter: (a: DataType, b: DataType) => a.name2.length - b.name2.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Дата2",
      dataIndex: "date2",
      key: "date2",
      width: "10%",
      ...useSearch("date2"),
      sorter: (a: DataType, b: DataType) =>
        new Date(a.date2).getTime() - new Date(b.date2).getTime(),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Число2",
      dataIndex: "number2",
      key: "number2",
      width: "10%",
      ...useSearch("number2"),
      sorter: (a: DataType, b: DataType) => a.number2 - b.number2,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Чек2",
      dataIndex: "checkbox2",
      key: "checkbox2",
      width: "3%",
      render: (_value, _record, _rowIndex) => (
        <Checkbox
          key={_rowIndex}
        />
      )
    },
  ];
  const defaultCheckedList = columns.map((item) => item.key as string);

  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key as string),
  }));
  return (
    <>
      <Checkbox.Group
        value={checkedList}
        options={options as CheckboxOptionType[]}
        onChange={(value) => {
          setCheckedList(value as string[]);
        }}
      />
      <Table
        virtual
        columns={newColumns}
        dataSource={data}
        pagination={false}
        bordered
        scroll={{ y: 700 }}
      />
    </>
  );
};

export default App;
