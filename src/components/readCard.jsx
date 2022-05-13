
function ReadCard(props){
  const data="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
  return(
    <div className="faq_card">
    <div className="vis">
      <h3>{props.title}</h3>
    </div>
    <div className="answer">
      <p>{data}</p>
    </div>
    <div className="more">
      <h3>READ MORE</h3>
      <img src="images\right.png" alt="" />
    </div>
    </div>
  )
}
export default ReadCard;