import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div className="h-full rounded-4xl flex flex-nowrap shrink-0 overflow-x-auto gap-10  p-6 w-2/3">
      {props.users.map(function(element, idx){

        return <RightCard key={idx} id={idx} color={element.color} img={element.img} tag={element.tag}/>
      })}
    </div>
  )
}

export default RightContent
