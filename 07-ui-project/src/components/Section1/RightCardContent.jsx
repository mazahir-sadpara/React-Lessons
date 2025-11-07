
const RightCardContent = (props) => {
  return (
      <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h2 className="text-xl font-semibold bg-white rounded-full h-14 w-14 flex justify-center items-center">{props.id+1}</h2>
        <div>
          <div>
            <p className="text-xl leading-[1.1] text-white mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus
              eum, ullam esse explicabo animi?
            </p>
          </div>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-5 py-2 rounded-full">{props.tag}</button>
            <button style={{backgroundColor:props.color}} className= " text-white font-medium px-3 py-2 rounded-full">
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
