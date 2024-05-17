
function DessertsList(props) {

    
    const dessertsItems = props.data.filter((dessert) => {
        console.log(dessert.calories)
        return dessert.calories <= 500
    })
    .sort((a,b) => {return a.calories - b.calories})
    .map((dessert) => {
      return <li >{dessert.name} - {dessert.calories} cal</li>
    })


    return (
      <ul>
        {dessertsItems}
      </ul>
    );
  }
  
  export default DessertsList;