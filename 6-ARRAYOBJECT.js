let userOne={
  name:"Ram",
  phone:98765

};
let userTwo={
  name:"sita",
  phone:987868
};
users=["Ram","sita"]
console.log(users);
 

courses=[
{
  title:"mern",
  teacher:"abc",
  duration:"3month",
  syllabus:[
    {
      topic:"react",
      duration:"1mont",
      time:"4hour"
    }
  ]
},
{
  title:"python",
  teacher:"xyz",
  syllabus:[
    {
      topic:"django",
      duration:"25days",
      time:"2hour"

  }],
},
{
  title:"QA",
  teacher:"EFG",
  syllabus:[{
    topic:"post man ",
    duration:"4days",
    time:"1 hour"
  }],

},
{
  title:"mern2",
  teacher:"abc",
  duration:"3month",
  syllabus:[
    {
      topic:"react",
      duraction:"1 days",
      time:"2 hour"
    },
  ]
},
]
console.log(courses);
console.log("4th index",courses[3]);
courses[3].syllabus[0].duration="10days"
console.log("after change",courses);

console.log(courses);
console.log("1st index",courses[0].syllabus[0]);
courses[0].syllabus[0].duration="10days";
console.log("after change",courses);

console.log("2st index",courses[1].syllabus[0]);
courses[1].syllabus[0].duration="20days";
console.log("after change",courses);
console.log(courses);

users8=[
  {
    name:"Ram",
    Phone:[
      {
        ncell:9810335260,
        ntc:9842476993
      }
    ]

  },
  {
    name:"Laxman",
    Phone:[
      {
        ncell:9812345,
        ntc:982343456
      }
    ]
  }
]
console.log(users8);
console.log("1st Index",users8[0]);
users8[0].Phone[0].ncell=98234;
console.log("After Change",users8);

