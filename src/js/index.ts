let axios = require('axios')
/*Drivhus Cont GET/GETALL
Alarm Cont GET+PUT(STATUS)*/
const UrlAlaram = "https://drivhus13.azurewebsites.net/api/AlarmData/"
const UrlDrivhus = "https://drivhus13.azurewebsites.net/api/drivhusdata/"

let table: HTMLTableElement = <HTMLTableElement>document.getElementById("drivtable")
let inputID = document.createElement("input") as HTMLInputElement
let inputTemp = document.createElement("input") as HTMLInputElement
let inputHumi = document.createElement("input") as HTMLInputElement
let statusbtn = document.createElement("button") as HTMLButtonElement

inputID.placeholder ="DrivhusID"
inputTemp.placeholder="temp"
inputHumi.placeholder="humi"
statusbtn.textContent="OK/Set"

document.body.appendChild(inputID)
document.body.appendChild(inputTemp)
document.body.appendChild(inputHumi)
document.body.appendChild(statusbtn)

axios.get(UrlDrivhus)
  .then(function (response : any) {
     console.log(response);
     response.data.forEach(drivhus => {
         let row = document.createElement("tr");
         table.appendChild(row);

         //let drivhus_id = document.createElement("td");
         let drivhus_temp = document.createElement("td");
         let drivhus_humi = document.createElement("td")


        // drivhus_id.innerText = drivhus.DrivhusID
         drivhus_temp.innerText = drivhus.temp
         drivhus_humi.innerText = drivhus.humi
        
        // row.appendChild(drivhus_id);
         row.appendChild(drivhus_temp);
         row.appendChild(drivhus_humi);
     });

  });