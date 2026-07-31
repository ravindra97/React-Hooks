function AppFlat() {

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

export default AppFlat