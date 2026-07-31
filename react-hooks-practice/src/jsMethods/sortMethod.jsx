function AppSort() {
  //Used to do sorting on array & it also mutates the array

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

export default AppSort