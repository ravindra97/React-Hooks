function AppFilter() {

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

export default AppFilter
