import FoodItem from "./foodItemList";
import ErrorInfo from "./ErrorMessage";

function App(){
   let Food = ["dal" , "bhat" , "roti" , "salad" , "mithai"];

  //let Food=[];

  // if(foodItems.length===0){
  //   return <h1>oops cant render</h1>
  // }

  return (
    <>
    {/* using ternary */}
      {/* {foodItems.length===0?<h1>cant render this menu</h1>:null} */}
      <FoodItem FoodItems={Food}></FoodItem>
      <ErrorInfo ErrorItems = {Food}></ErrorInfo>
      
    </>
  )
}

export default App;