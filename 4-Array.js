let fruits = ["apple", "banana", "orange", "kiwi"]
console.log("fruits", fruits);

let oddNumbers = [1, 3, 5, "seven", 9]
console.log("odd Numbers=", oddNumbers);
console.log("4th index:", oddNumbers[3]);
oddNumbers[3] = 7
console.log("After Change", oddNumbers);

let course = ["Mern", "QA", "Python"]
// change mern to mern stack and qa to quality assurance
console.log("course", course);
console.log("1st index", course[0]);
console.log("2nd index", course[1]);
course[0] = "Mern stack";
course[1] = "Quality Assurance";
console.log("After Change", course);


let ourCourse = {
  title: "mern",
  duration: "3 months",
  Duration: "6 months",
  startTime: 4,
  endTime: 5,
  endTime: 6,
}
console.log(ourCourse);
console.log("tile", title);
title = "mern stack";
console.log("After change", ourCourse);