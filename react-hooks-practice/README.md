# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## -----------------------------JS Methods ----------------------

## Map() Method Start Important(*)
Used to iterate the list or array
function App() {

  const nums = [1,2,3];

  return (
    <>
      <section id="center">


        <h1>{nums}</h1>
        {/* single parameter whih is required  */}
        {<h1>{nums.map(item => item * 2)}</h1>} 
        {/* All the params of map(item,index,array) */}
        {
          nums.map((item,index,arr) => 
              (<p> {index + 1} : {item*2} & array size is {arr.length}</p>)
          )
        }
      </section>
    </>
  )
}

export default App
## Map() Method End

## Filter() Method Start Important(*)
Used to remove items which are filtered
function App() {

  const nums = [5,6,7];

  return (
    <>
      <section id="center">


        <h1>{nums}</h1>
        {/* single parameter whih is required  */}
        {<h1>{nums.filter((item)=> item > 2)}</h1>} 
        {/* All the params of filter(function(item,index,array) => this.argument or logic or code statment )  */}
        {
          nums.filter((item,index,arr) => 
              item > 0 && arr[index] >= 6 && arr.length>0
          )
        }
      </section>
    </>
  )
}

export default App
## Filter() Method End

## Find() Method Start Important(*)
returns the single item of filtered result
function App() {

  const nums = [5,6,7];

  return (
    <>
      <section id="center">


        <h1>{nums}</h1>
        {/* single parameter whih is required  */}
        {<h1>{nums.find((item)=> item > 2)}</h1>} 
        {/* All the params of find(function(item,index,array) => this.argument or logic or code statment )  */}
        {
          nums.find((item,index,arr) => 
              item > 0 && arr[index] > 6 && arr.length>0
          )
        }
      </section>
    </>
  )
}

export default App
## Find() Method End

## FindIndex() Method Start 
function App() {

  const nums = [5,6,7];
  const fruits = ["Banana","Apple","Mango","Starwberry"];
  return (
    <>
      <section id="center">


        {/* single parameter whih is required  */}
        {<h1>{fruits.findIndex((item)=> item.includes("e"))}</h1>} 
        {/* All the params of findIndex(function(item,index,array) => this.argument or logic or code statment )  */}
        {
          fruits.findIndex((item,index,arr) => 
              item.startsWith("M") && arr.length>0
          ) + 1
        }
      </section>
    </>
  )
}
## FindIndex() Method 

## Every() Method Start
checks the condition satisfies for each element in the array and return boolean value

function App() {

  const nums = [5,6,7];
  const fruits = ["Banana","Aapple","Mango","Starwberry"];

  const fruitsAllContainsA = fruits.every((item) => item.includes("a") || item.includes("A"));
  return (
    <>
      <section id="center">
        {/* single parameter whih is required  */}
        <button disabled={!fruitsAllContainsA}>
            ContainsA
        </button>
      </section>
    </>
  )
}
## Every() Method End

## Reduce() Method Start
Used for grouping, count, totaling
function App() {

  const nums = [5,6,7];
  const fruits = ["Banana","Aapple","Mango","Starwberry"];

  {/* two parameter whih is required  */}
  const numsReduce = nums.reduce((accumalator,currentItem) =>  accumalator += currentItem);

  /* Wit all the parameters for reduced */
  const numsReduceAllParams = nums.reduce((accumalator,currentItem,currenIndex,arr) => {  
      accumalator += currentItem;

      if(arr.length > 0)
      {
        return accumalator + 1;
      }

    },0
  );
  return (
    <>
      <section id="center">
        {numsReduce}
        {"\n"}
        {numsReduceAllParams}
        {/*Output : 18 21*/}
      </section>
    </>
  )
}
## Reduce() Method End

## Includes() Method Start
Used to check the value exists in the array and return boolean value

const fruits = ["Banana","Aapple","Mango","Starwberry"];

fruits.includes("Banana"); //Returns => true
## Includes() Method End

## Sort() Method Start
function App() {
  Used to do sorting on array & it also mutates the array

  const nums = [6,5,8,7];
  const numsDec = [6,5,8,7];
  const fruits = ["Banana","Aapple","Mango","Starwberry"];
  const fruitsDec = ["Banana","Aapple","Mango","Starwberry"];
  //Declaring the array splitly because sort mutates the array

  {/* sorting integer array requires two parameter  */}
  const numsSortAsdending = nums.sort((a,b) => a-b); //ascending order
  const numsSortDesending = numsDec.sort((a,b) => b-a); //decending order

  /* sorting string array requires no parameter */
  const fruitsSortStringAscending = fruits.sort(); //ascending order
  const fruitsSortStringDecending = fruitsDec.sort().reverse(); //decending order
  return (
    <>
      <section id="center">
        {numsSortAsdending}
        <br></br>
        {numsSortDesending}
        <br></br>
        {fruitsSortStringAscending}
        <br></br>
        {fruitsSortStringDecending}
        {/*Output : 
                  5678
                  8765
                  Aapple,Banana,Mango,Starwberry
                  Starwberry,Mango,Banana,Aapple
        */}
      </section>
    </>
  )
}
## Sort() Method End

## Reverse() Method Start
it reverses & mutates the array and returns same reference to array
function App() {

  const nums = [6,5,8,7];
  const fruits = ["Banana","Aapple","Mango","Starwberry"];
  //Declaring the array explicitly because sort mutates the array

  {/* reversing integer array requires no parameter  */}
  const numsReverse = nums.reverse(); 

  /* reversing string array requires no parameter */
  const fruitsReverseString = fruits.reverse(); 
  return (
    <>
      <section id="center">
        {numsReverse}
        <br></br>
        {fruitsReverseString}
        <br></br>
        {/*Output : 
                  7856
                  Starwberry,Mango,Aapple,Banana
        */}
      </section>
    </>
  )
}
## Reverse() Method End

## Slice() Method Start
function App() {

  const nums = [6,5,8,7];
  const fruits = ["Banana","Aapple","Mango","Starwberry","Kiwi"];

  /* slice with two parameter coppies array from element starting element with index 1 and excluding element of 3 */
  const fruitsSliceResult1 = fruits.slice(1,3); 

  /* slice with one required parameter coppies array from element starting element with index 3, 
  returns the array starting from provided element till end of array */
  const fruitsSliceResult2 = fruits.slice(3); 

  /* slice without parameter coppies entire array without any changes */
  const fruitsSliceResult3 = fruits.slice();

  return (
    <>
      <section id="center">
        {fruitsSliceResult1}
        <br></br>
        {fruitsSliceResult2}
        <br></br>
        {fruitsSliceResult3}
        <br></br>
        {/*Output : 
                  ["Apple","Mango"]
                  ["Starwberry","Kiwi"]
                  ["Banana","Aapple","Mango","Starwberry","Kiwi"]
                  
        */}
      </section>
    </>
  )
}
## Slice() Method End

## Concat() Start
function App() {

  const nums = [6,5,8,7];
  const fruits = ["Banana","Aapple","Mango","Starwberry","Kiwi"];
  const fruits2 = ["Pineapple","Sugarcane"];

  //It is immutable never change the original array , provides shallow copy of the array

  /* Concat() without parameter coppies entire array without any changes */
  const fruitsConcatResult1 = fruits.concat();

  /* Concat() with one parameter coppies array of provided array as parameter */
  const fruitsConcatResult2 = fruits.concat(fruits2); 

  /* Concat() with multiple parameter of array and combining them together */
  const fruitsConcatResult3 = fruits.concat(nums,[9,10,11],fruits2); 

  return (
    <>
      <section id="center">
        {fruitsConcatResult1}
        <br></br>
        {fruitsConcatResult2}
        <br></br>
        {fruitsConcatResult3}
        <br></br>
        {/*Output : 
                  ["Banana","Aapple","Mango","Starwberry","Kiwi"]
                  ["Banana","Aapple","Mango","Starwberry","Kiwi","Pineapple","Sugarcane"]
                  ["Banana","Aapple","Mango","Starwberry","Kiwi",6,5,8,7,9,10,11,"Pineapple","Sugarcane"]
        */}
      </section>
    </>
  )
}
## Concat() End

## [...Array] Spread Operator Start
function App() {

  const nums = [6,5,8,7];
  const fruits = ["Banana","Aapple","Mango","Starwberry","Kiwi"];
  const fruits2 = ["Pineapple","Sugarcane"];

  //Spread(...array) Operator , it copies the and array and spread it's element into the destinaction array
  //use full when we wanto first copy the array to avoid mutating which is necessacity
  //Used in react on day to day development 

  /* Spread(...array) without parameter coppies entire array without any changes */
  const fruitsSpreadResult1 = [...fruits].join(",");

  /* Spread() with one parameter coppies array of provided array as parameter */
  const fruitsSpreadResult2 = [...fruits,...fruits2].join(","); 

  /* Spread() with multiple parameter of array and combining them together */
  const fruitsSpreadResult3 = [...nums,...fruits,...fruits2,[9,10,11,12]].join(","); 

  return (
    <>
      <section id="center">
        [{fruitsSpreadResult1}]
        <br></br>
        [{fruitsSpreadResult2}]
        <br></br>
        [{fruitsSpreadResult3}]
        <br></br>
        {/*Output : 
                  [Banana,Aapple,Mango,Starwberry,Kiwi]
                  [Banana,Aapple,Mango,Starwberry,Kiwi,Pineapple,Sugarcane]
                  [6,5,8,7,Banana,Aapple,Mango,Starwberry,Kiwi,Pineapple,Sugarcane,9,10,11,12]
        */}
      </section>
    </>
  )
}
## [...Array] Spread Operator End

## Flat() Method Start

used to flatten the array and copies it's element into another array

function App() {

  const nums = [6,5,8,7,[9,10,11]];
  const fruits = [["Banana",["Aapple",["Mango","Starwberry","Kiwi"],["Pineapple","Sugarcane"]]]];

  //Flat() Method used to flatten the array and copies it's element into another array
  //used for destructruring of array(single, multiple) and storing into flaten single array.

  /* Flat() coppies entire array without any changes */
  const fruitsFlatResult1 = fruits.flat().join(",");

  /* Flat() with two arrays combines or copy the arrays into destined */
  const fruitsFlatResult2 = fruits.flat(2).join(",");
  console.log(fruitsFlatResult2);

  /* Flat() with multiple parameter of array and combining them together */
  const fruitsFlatResult3 = 0; 

  return (
    <>
      <section id="center">
        [{fruitsFlatResult1}]
        <br></br>
        [{fruitsFlatResult2}]
        <br></br>
        [{fruitsFlatResult3}]
        <br></br>
        {/*Output : 
                  [Banana,Aapple,Mango,Starwberry,Kiwi]
                  [Banana,Aapple,Mango,Starwberry,Kiwi,[Pineapple,Sugarcane]]
        */}
      </section>
    </>
  )
}

## Flat() Method End



## -----------------------------React Hooks------------------------

## UseState() Hook Start
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(() => event.target.value)
  };

  const onClickSubmit = (event) => {
    alert(`Inputed text is : ${name}`);
  };

  return (
    <>
      <section id="center">
        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <input
          id = "user-inp"
          type = "text"
          value={name}
          onChange={handleChange}
        >
        </input>
        <button
          type="button"
          className="counter"
          onClick={onClickSubmit}
        >
          Name is {name}
        </button>
      </section>

      {/* <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}
## UseState() Hook End


