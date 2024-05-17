
function DessertsList(props) {


    const dessertsItems = props.data.filter((dessert) => {
        return dessert.calories <= 500
    })
    .sort((a,b) => {return a.calories - b.calories})
    .map((dessert,idx) => {
      return <li key={idx}>{dessert.name} - {dessert.calories} cal</li>
    })


    return (
      <ul>
        {dessertsItems}
      </ul>
    );
  }
  
  export default DessertsList;