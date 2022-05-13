
function TopicCard(props){
  const data="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
  let clName="right"
  if(props.id===2){
    clName="right2"
  }
  return(
    <div className="mix_card">

    <div className="left">
      <div className="left_title">
        <h3>{props.title}</h3>
      </div>
      <div className="answer" id="left_ans">
        <p>{data}</p>
      </div>
      <div className="more" id="left_more">
        <h3>READ MORE</h3>
        <img src="images\right.png" alt="" />
      </div>
    </div>

    <div className={clName}>
      <div>

      </div>
    </div>

    </div>
  )
}
export default TopicCard;