import '../index.css'

const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <img src="" alt="try.." />
        <h3>{props.user}, {props.age}</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button className="button">Explore</button>
      </div>
    </div>
  )
}

export default Card
