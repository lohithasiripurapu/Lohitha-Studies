function singSong() {
  console.log("DO");
}

function add(i, j = 10) {
  console.log(`${i + j}`);
}
const repeat = function (message, times = 1) {
  let result = "";

  for (let i = 0; i < times; i++) {
    result += message;
  }
  return result;
};

repeat("hi");
add(2, 3);
//singSong()

const cat = {
  name: "Blue Steel",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says meow`);
  },
};

const meowChild = cat.meow; //this only has access to meow in cat. it does not have access to name, color and breed

//foreach
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach(function (el) {
  console.log(el * el);
});

let brr = arr.map(function (el) {
  return el * el;
});

//console.log(brr);

const movies = [
  {
    title: "KGF",
    score: 95,
    year: 2019,
  },

  {
    title: "KGF2",
    score: 90,
    year: 2022,
  },

  {
    title: "RRR",
    score: 85,
    year: 2022,
  },

  {
    title: "VIKRAM",
    score: 60,
    year: 2022,
  },
];

movies.forEach(function (m) {
  console.log(`${m.title} - ${m.score}/100`);
});

const title_array = movies.map(function (m) {
  return m.title;
});

const score_array = movies
  .map(function (m) {
    return m.score;
  })
  .sort();

//another way of writing function using arrow

const demoAdd = (x, y) => {
  return x + y;
};

const demo = () => {
  console.log("bhcdbhcb");
};

const square = (s) => {
  //brackets are optional for 1 argument but vs code automatically adds them when saving
  return s * s;
};
console.log(demoAdd(100, 6));

//--------------------Arrow functions without curly braces----------------------------
//---------------no need of return key word instead use small braces ()----------------
//---------------should return atleast 1 argument-------------------------

// const rolldie = ()=>(
//     Math.floor(Math.random()*6)+1
// )

const rolldie = () => Math.floor(Math.random() * 6) + 1;

//setTimeOut and setInterval
// console.log("hello.....");
// setTimeout(() => {
//   console.log("are you stillllllll there");
// }, 3000);

console.log("ok bye");

// const id = setInterval(() => {
//   return Math.random();
// }, 3000);

//filters

const goodMovies = movies.filter((m) => m.score > 80);
const recentMovies = movies.filter((m) => m.year > 2021).map((m) => m.title);

let usernames = ["lohitha", "Siripurapu"];

function validUserNames(usernames) {
  let ans = [];
  usernames.forEach(function (user) {
    if (user.length < 10) {
      ans.push(user);
    }
  });
  return ans;
}
console.log(validUserNames(["lohitha", "Siripurapu"]));

const score = [1, 2, 3, 4, 5, 6, 7, 9];

console.log(score.every((num) => num >= 4)); //all elements should satisfy the condition
console.log(score.some((num) => num >= 10)); // atleast 1 element should satisfy

//Reduce - reduces all elemets in an array to a single element (sum of all elements in an array)

const total = score.reduce((acc_score, curr) => acc_score + curr);

//minimum till now
const min = score.reduce((acc_min, curr) => {
  if (curr < acc_min) {
    return curr;
  }
  return acc_min;
});

movies.reduce((acc_best, curr) => {});

const person = {
  firstName: "Lohitha",
  LastName: "Siripurapu",
  fullName: () => {
    return `${this.firstName} ${this.LastName}`;
  },
};

const spreadDemo = [...movies, ...arr];
