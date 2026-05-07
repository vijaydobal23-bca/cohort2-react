import styles from"./item.module.css"

function Items(props){
  return (
    <>
    <li className={`${styles["my-item"]}`}>{props.FoodItem}</li>
    </>
  )  
}

export default Items;