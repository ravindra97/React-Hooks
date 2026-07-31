function AppReduce() {

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

export default AppReduce