import React from "react";
import { Doughnut, Line } from "react-chartjs-2";



const Person = ({obj}) => {
  const expData = getdata(obj.companies)
    return (
      <li>
        <h1>{obj.name}</h1>
        <div>생년월일: {obj.birthday}</div>
        <div>나이: {calcAge(obj.birthday)}</div>
        <div>전공: {obj.major}</div>
        <div>학점 : {obj.jumsu}</div>
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
  let now = 0;
  const max = 202005;
  const dateList = [];
  const dataList = [];
  min = companies[0].startDate;
  
  for(let i = min; i<= max; i++) {
    if(i.toString().substr(-2) >= '13') {
      continue;
    }
    dateList.push(i);
    let value = checkValue(companies, i);
    dataList.push(value);
  }

  return [dateList, dataList];
}

const checkValue = (companies, value) => {
  let returnValue = false;
  companies.forEach(company => {
    let s = company.startDate;
    let e = company.endDate;
    if(s <= value && value <= e) {
      returnValue = true;
    }
  });
  return returnValue
}

const calcAge = (birthYear) => {
  birthYear = birthYear.toString().substr(0,4);
  var today = new Date();
  var nowYear = today.getFullYear();
  var age = nowYear - Number(birthYear) + 1;
  return age;
}

const getdata = (companies) => {
  let [dateList, dataList] = labelAndData(companies);

  return {
    labels: dateList,
    datasets: [
      {
        // labels: ["긍정적", "부정적", "보통"],
        data: dataList,
        borderWidth: 5,
        hoverBorderWidth: 3,
        backgroundColor: [
          "rgba(98, 181, 229, 1)",
        ],
        fill: true,
        order:0
      }
    ]
  }
};


export default Person;