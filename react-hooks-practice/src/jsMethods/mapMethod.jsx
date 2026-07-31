function AppMap() {

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

export default AppMap