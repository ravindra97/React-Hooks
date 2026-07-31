function AppEvery() {

  const nums = [5,6,7];
  const fruits = ["Banana","Aapple","Mango","Starwberry"];

  const fruitsAllContainsA = fruits.every((item) => item.includes("a") || item.includes("A"));
  return (
    <>
      <section id="center">
        {/* single parameter whih is required  */}
        <button disabled={!fruitsAllContainsA}>
            ContainsA
        </button>
      </section>
    </>
  )
}

export default AppEvery