import React from "react";
import { Doughnut, Line } from "react-chartjs-2";



const Person = ({obj}) => {
  const expData = getdata(obj.companies);
  const ruddfur = getCompaniNames(obj.companies);
    return (
      <li>
        <h1>{obj.name}</h1>
        <div>생년월일: {obj.birthday}</div>
        <div>나이: {calcAge(obj.birthday)}</div>
        {/* <div>학교: {obj.university}</div> */}
        <div>시간: {obj.time}</div>
        <div>전공: {obj.major}</div>
        <div>학점 : {obj.jumsu}</div>
        <div>경력: {ruddfur}</div>
        <Line
        options={{
          legend: {
            display: false,
            position: "right"
          }
        }}
        data={expData}
        height={50}
      />
      </li>
    );
}
const labelAndData = (companies) => {
  let min = 201001;
  const max = 202005;
  const dateList = [];
  const dataList = [];
  const colorList = []
  min = companies[0].startDate;
  
  for(let i = min; i<= max; i++) {
    const month = i.toString().substr(-2);
    if(month === '00' || month >= '13') {
      continue;
    }
    dateList.push(i);
    const [value, color] = checkValue(companies, i);
    dataList.push(value);
    colorList.push(color);
  }

  return [dateList, dataList, colorList];
}

const checkValue = (companies, value) => {
  let returnValue = false;
  let color = null;
  companies.forEach((company,i) => {
    let s = company.startDate;
    let e = company.endDate;
    if(s <= value && value <= e) {
      returnValue = true;
      switch(i) {
        case 0:
          color = "rgba(98, 181, 229, 1)";
          break;
        case 1:
          color = "rgba(229, 3, 81, 1)";
          break;
        case 2:
          color = "rgba(181, 12, 229, 1)";
          break;
        case 3:
          color = "rgba(5, 181, 12, 1)";
          break;
        default:
          color = "rgba(0, 1, 255, 1)";
          break;
      }
    }
  });
  return [returnValue, color]
}

const calcAge = (birthYear) => {
  birthYear = birthYear.toString().substr(0,4);
  var today = new Date();
  var nowYear = today.getFullYear();
  var age = nowYear - Number(birthYear) + 1;
  return age;
}

const getCompaniNames = (companies) => {
  const list = [];

  companies.forEach(i => {
    list.push(i.name);
  })
  return list.join(', ');

}

const getdata = (companies) => {
  let [dateList, dataList, colorList] = labelAndData(companies);

  return {
    labels: dateList,
    datasets: [
      {
        data: dataList,
        borderWidth: 5,
        hoverBorderWidth: 3,
        backgroundColor: colorList,
        // backgroundColor: [
        //   "rgba(98, 181, 229, 1)",
        // ],
        fill:true,
      }
    ]
  }
};


export default Person;