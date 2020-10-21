import { Course } from './course.js';
import { EstudianteData } from './course.js'

import { dataCourses } from './dataCourses.js';
import { dataEstudiante } from './dataCourses.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let estudianteTbody: HTMLElement = document.getElementById('estudiante')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredit")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const minbox: HTMLInputElement = <HTMLInputElement> document.getElementById("min-serch")!;
const maxbox: HTMLInputElement = <HTMLInputElement> document.getElementById("max-serch")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


renderCoursesInTable(dataCourses);

renderStudentInTable(dataEstudiante);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`

btnfilterByName.onclick = () => applyFilterByName();

btnfilterByCredits.onclick = () => applyFilterByCredit();



function renderStudentInTable(estudiante: EstudianteData[]): void{
  console.log('Desplegando datos de estudiante');
  estudiante.forEach((dato) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${dato.tipo}</td>
                           <td>${dato.dato}</td>`;
    estudianteTbody.appendChild(trElement);
  });
}



function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function applyFilterByCredit(){
  let numMin =parseInt(minbox.value);
  let numMax =parseInt(maxbox.value);
  clearCoursesInTable();

  if(numMax == null || numMin==null){

  }
  else{
  let val: Course[] = searchCourseByCredit(numMax, numMin, dataCourses);
  renderCoursesInTable(val);
  }


}

function searchCourseByCredit(max: Number, min: Number,courses: Course[]){
  
  return courses.filter(c => (c.credits >= min && c.credits <= max));
}

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}