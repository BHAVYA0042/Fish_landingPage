import Quest from "./questionCard";
function Faq(){
  const data={
      question:"Velit venenatis pretium mattis consectetur massa pretium mattis ?",
      answer:"Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
    }
  
  return(
    <div className="faq_sec">
      <h2>FAQs</h2>
      {[...Array(3).keys()].map(()=>{
        return(
          <Quest 
            question={data.question}
            answer=  {data.answer}
        />
        )

      })}

    </div>
  )
}
export default Faq;