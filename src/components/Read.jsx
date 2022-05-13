import ReadCard from "./readCard"
function Read(){
  const titles=['The right quality','The right time','The basis of a balanced diet']
  
  return(
    <div className="faq_sec">
      <h2>HAVE A READ</h2>
      {titles.map((item)=>{
        return(
          <ReadCard 
            title={item}
        />
        )

      })}

    </div>
  )
}
export default Read;