
import TopicCard from "./topic_card";
function Topic(){
  const titles=[
    { key:1,
      title:"TOPICS YOU CAN'T MISS",
      img:"images/Rectangle 60.png"
    },
    { key:2,
      title:"HOW TO CLEAN/CUT YOUR SEAFOOD",
      img:"images/Rectangle 80.png"
    }
    ]
  
  return(
    <div className="faq_sec">
      <h2>TOPICS YOU CAN'T MISS</h2>
      {titles.map((item)=>{
        return(
          <TopicCard
            id={item.key} 
            title={item.title}
            img={item.img}
        />
        )

      })}

    </div>
  )
}
export default Topic;