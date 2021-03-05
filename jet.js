
class Ring {
    constructor(r) {
        this.r = r;
    }
    get radius() {
        return this.r;
    }
    set radius(r) {
        this.r = r;
    }
    get d() {
        return this.r * 2;
    }
    area() {
        return Math.PI * this.r * this.r;
    }
    circumference() {
        return Math.PI * this.r * 2;
    }
}

let ring = new Ring(5);
console.log(ring.radius);
console.log(ring.d);
console.log(ring.area().toFixed(2));
console.log(ring.circumference().toFixed(2));


//====================

const mainDiv = document.getElementById("content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

//==========
class Employee {// имя класса
    constructor(name, stage, position) { // конструктор с (порядком вівода информации)
        this.name = name;  //название запрашиваем информации от const newEmp с помощью newEmployee 
        this.age = age;  //название запрашиваем информации от const newEmp с помощью newEmployee 
        this.positin = positin; //название запрашиваем информации от const newEmp с помощью newEmployee 
        this.stage = stage; //название запрашиваем информации от const newEmp с помощью newEmployee 
    }
}

const newEmp = [ // константа с данными
    newEmployee = { // имя класса куда подается информация
        name: "Jonny", //  имя данных которые подаюстся на конструктор через (this.имя данных)
        age: "26", //  имя данных которые подаюстся на конструктор через (this.имя данных)
        position: "klerk", // имя данных которые подаюстся на конструктор через (this.имя данных)
        stage: "3 year", // имя данных которые подаюстся на конструктор через (this.имя данных)
    },

    newEmployee = {
        name: "Kate",
        age: "19",
        position: "kasir",
        stage: "1 year",
    },

    newEmployee = {
        name: "Elis",
        age: "24",
        position: "kasir",
        stage: "2 year",
    },

    newEmployee = {
        name: "Kevin",
        age: "49",
        position: "direction",
        stage: "13 year",
    },

    newEmployee = {
        name: "Markus",
        age: "48",
        position: "head of security",
        stage: "23 year",
    },

    newEmployee = {
        name: "Busi",
        age: "33",
        position: "administration",
        stage: "13 year",
    },

    newEmployee = {
        name: "Justin",
        age: "54",
        position: "cleaner",
        stage: "5year",
    },
];

//=========
class EmpTable {
    constructor(newEmp) {
        this.newEmp = newEmp;
    }
    getHtml() {
        const table = document.getElementById("content__table");
        const array = this.newEmp;
        const head = document.createElement("tr");
        head.setAttribute("style", "font-size: 18px;");
        const th1 = document.createElement("th");
        th1.textContent = "Name";
        const th2 = document.createElement("th");
        th2.textContent = "Age";
        const th3 = document.createElement("th");
        th3.textContent = "Position";
        const th4 = document.createElement("th");
        th4.textContent = "Stage"
        for (let i in array) {
            let tr = document.createElement("tr");
            table.append(tr);
            for (let j in array[i]) {
                let td = document.createElement("td");
                td.textContent = array[i][j];
                tr.append(td);
                td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
            }
        }
    }
}
const tableObj = new EmpTable(newEmp);
tableObj.getHtml();