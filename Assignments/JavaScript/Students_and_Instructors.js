// Part 1
var students = [
  {first_name: 'Michael', last_name: 'Jordan'},
  {first_name: 'John', last_name: 'Rosales'},
  {first_name: 'Mark', last_name: 'Guillen'},
  {first_name: 'KB', last_name: 'Tonel'}
]

for(var student in students){
  console.log(students[student].first_name, students[student].last_name);
}

// Part 2
var users = {
  'Students': [
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name: 'John', last_name: 'Rosales'},
    {first_name: 'Mark', last_name: 'Guillen'},
    {first_name: 'KB', last_name: 'Tonel'}
  ],
  'Instructors': [
    {first_name: 'Michael', last_name: 'Choi'},
    {first_name: 'Martin', last_name: 'Puryear'},
  ]
}

function printUsers(){
  for(var key in users){
    console.log(key);
    for(var i = 0; i < users[key].length; i ++){
      console.log((i + 1) + " - " + users[key][i].first_name, users[key][i].last_name + " - " + getNameLength(users[key][i]));
    }
  }
}

function getNameLength(person){
  return person.first_name.length + person.last_name.length;
}

printUsers();
