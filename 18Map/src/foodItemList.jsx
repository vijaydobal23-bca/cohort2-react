import Items from "./item";

function FoodItem({FoodItems}){
    return (
        <>
      <h1>this is food items</h1>
      <ul class="list">
        {FoodItems.map((item) =>
         <Items FoodItem = {item} key={item}></Items>)}
      </ul>
        </>
    )

}
    export default FoodItem;
