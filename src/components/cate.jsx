import Card from "./Card";
function Category(props){

  return(
    <div className="working">
      <div className="intro">
        <h2>HOW IT WORKS</h2>
        <p>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
      </div>
      <div className="categ">
        <h4>CATEGORIES</h4>
        <div className="card_grid">
          {props.data.map((item)=>{
            return(
              <Card 
                name={item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Category;