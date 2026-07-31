function AppReverse() {

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

export default AppReverse