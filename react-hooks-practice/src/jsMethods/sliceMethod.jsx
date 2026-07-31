function AppSlice() {

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

export default AppSlice
