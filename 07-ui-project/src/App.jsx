import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1560748755-b4bfcd82e410?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600', 
      intro:'', 
      color: 'blue',
      tag:'Satisfied'
    },
    {
      img: 'https://media.istockphoto.com/id/1273864116/photo/portrait-of-beautiful-business-woman-is-showing-something-on-gray-background.jpg?s=1024x1024&w=is&k=20&c=ILyBgLUdv9ALfxKRXgOPnp9wAjTLCq8txpRDcrQG8u8=',
      intro:'', 
      color: 'orange',
      tag:'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1678637803637-514841dd08e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600', 
      intro:'', 
      color: 'gray',
      tag:'Underbanked'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
