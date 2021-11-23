//loop - for loop
//Är inte beroende av en array

const arr = ["hej", "svejs", "tjohejs", "tjoho"];

const arr2 = [];

//console.log(arr.length);

/*
for (let i = 0; i < 4; i++) {
  //console.log(arr[1]);
  console.log(arr[i]);
  document.body.innerHTML = arr[i];
  arr2.push(arr[i] + "tjohejsan");
  console.log(arr2);
}*/

//array.map() - används nästan alltid för att rendera ut innehåll från arrayer

const newArray = arr.map((value) => `<p>${value} wohooo</p>`);

console.log(newArray);

const returnNewArray = () => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + " wohooo");
  }
  return newArray;
};

const anotherNewArray = returnNewArray();

document.body.innerHTML = newArray.join("");
