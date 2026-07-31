function AppFindIndex() {

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

export default AppFindIndex