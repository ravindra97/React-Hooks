function AppSpread() {

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

export default AppSpread