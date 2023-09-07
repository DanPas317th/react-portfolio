import './App.css';
import avatar from './images/image1.png';

function Button(){

  return (
    <button type="button" class="btn btn-primary">Button</button>
  )
}

const profile = {
  fname: 'Daniel',
  lname: 'Pasichnyuk',
  motto: 'Let me tell you about myself...',
  image: {avatar},
}

export default function App(){
  return (
    <div className="button">
    <h1>Hello, I am {profile.fname} {profile.lname}.</h1>
    <p></p>
    <img src={avatar} alt="avatar" style={{width: 200, height: 200}} />
    <Button />
    </div>
  )
}