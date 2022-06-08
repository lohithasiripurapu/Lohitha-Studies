let input = "temp";
let todo = [];
while (input != "quit") {
  input = prompt("What would you like to do?");
  switch (input) {
    case "new":
      todo.push(prompt("What do you want to add"));
      break;
    case "delete":
      //console.log("Select the index you want to delete")
      for (let i = 0; i < todo.length; i++) {
        console.log(`${i} : ${todo[i]}`);
      }

      let rem = prompt("Select the index you want to delete");
      todo.splice(rem, 1);

      console.log("After delete");
      for (let i = 0; i < todo.length; i++) {
        console.log(`${i} : ${todo[i]}`);
      }
      break;

    case "list":
      console.log("Here is the list of all elements in todo till now");
      for (let i = 0; i < todo.length; i++) {
        console.log(`${i} : ${todo[i]}`);
      }

      break;
  }
}
console.log("quit the app");
