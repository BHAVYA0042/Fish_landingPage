function Card(props){
  const url= "images\\" + props.name.toLowerCase() + ".png"
  return(
    <div className="card">
      <img src={url} alt="" />
      <p>{props.name.toUpperCase()}</p>

    </div>
  )
}
export default Card;