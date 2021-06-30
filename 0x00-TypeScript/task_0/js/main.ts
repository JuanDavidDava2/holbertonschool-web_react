// Studen interface

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create objects

const student1: Student = {
  firstName: 'Student',
  lastName: 'Number one',
  age: 20,
  location: 'Boston',
};

const student2: Student = {
  firstName: 'Student',
  lastName: 'Number two',
  age: 19,
  location: 'New york',
};

// Create two students, and create an array named studentsList containing the two variables
const studentsList: Student[] = [];
studentsList.push(student1);
studentsList.push(student2);

// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const tr: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableCellElement = document.createElement('td');
th1.innerHTML = 'firstName';
const th2: HTMLTableCellElement = document.createElement('td');
th2.innerHTML = 'location';

body.append(table);
table.append(thead);
table.append(tbody);
thead.append(tr);
tr.append(th1);
tr.append(th2);

studentsList.forEach(({ firstName, location }: Student) => {
  const trTb: HTMLTableRowElement = document.createElement('tr');
  tbody.append(trTb);

  let td: HTMLTableCellElement = document.createElement('td');
  td.innerHTML = firstName;
  trTb.append(td);

  td = document.createElement('td');
  td.innerHTML = location;
  trTb.append(td);
});
