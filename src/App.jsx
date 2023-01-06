import './App.css'
import pic from './assets/mk.jpg'

function Footer(){
  return (
    <div>
      
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <img src={pic} className="Pic" />
      <p className="Name">Mohit Singh</p>
      <p className="Title">Frontend Developer</p>
      <p className="Website">mohit.singh.com</p>
      <p className="About">About</p>
      <p className="About--data">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      <p className="Interest">Interests</p>
      <p className="Interest--data">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
}

export default App
