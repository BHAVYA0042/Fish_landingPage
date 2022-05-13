import "./comp.css";


function Fish(){
  return(
    <div className="fish_cont">

      <div className="left_tags">

        <div className="sec1 tags">
          <div className="tag_text">
            <span>healthy</span>
          </div>
          <img src="images\vectors\Vector 1.png" alt="" />
        </div>
        <div className="sec2 tags">
          <div className="tag_text">
            <span>yummy</span>
          </div>
          <img src="images\vectors\Vector 2.png" alt="" />
        </div>
        <div className="sec3 tags">
          <div className="tag_text">
            <span>snacks</span>
          </div>
          <img src="images\vectors\Vector 3.png" alt="" />
        </div>

      </div>
      
      <div className="fish_div">
        <span className="upper">what the</span>
        <img src="images\image 1.png" className="fish_img" alt="" />
        <span className="lower">fish</span>
      </div>

      <div className="right_tags">

        <div className="sec4 tags">
          <img src="images\vectors\Vector 4.png" alt="" />
          <div className="tag_text">
            <span>tasty</span>
          </div>
        </div>
        <div className="sec5 tags">
          <img src="images\vectors\Vector 5.png" alt="" />
          <div className="tag_text">
            <span>lunch</span>
          </div>
        </div>
        <div className="sec6 tags">
          <img src="images\vectors\Vector 6.png" alt="" />
          <div className="tag_text">
            <span>dinner</span>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}
export default Fish;