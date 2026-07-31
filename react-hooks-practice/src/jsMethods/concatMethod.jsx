function AppConcat() {

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

export default AppConcat