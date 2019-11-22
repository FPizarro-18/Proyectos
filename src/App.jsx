import React, { useState,useEffect } from 'react';
import './App.css';
import Table from './components/table/Table';
import InputText from './components/inputText/InputText';
import InputPass from './components/inputPass/InputPass';
import Button from './components/button/Button';
import InputEmail from './components/input-email/InputEmail';


function App() {
  const [nombre,setNombre] = useState('');
  const [mail,setMail] = useState('');
  const [pass,setPass] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [passConfirm,setPassConfirm] = useState('');
var texto = '';
var users = [3];
useEffect(() => {
  texto = `El nombre es: ${nombre}, email: ${mail}, password:${pass}`

},[nombre]);
const printArray = () => {
  users.map(item => {
    return  <li>{item}</li>;
  }

  )
}
  return (
    
    <div className="App">
      {/* <Table/> */}
     <div>REGISTRO</div> 
     <InputText value={nombre} onChange={setNombre}/>
    <InputEmail value={mail} onChange={setMail}/>
    <InputEmail value={emailConfirm} onChange={setEmailConfirm} />
    <InputPass e={pass} x={setPass} />
    <InputPass e={passConfirm} x={setPassConfirm} />
    
    <Button onClick={() => printArray()}/>
    <div>{printArray()}</div>
    
      <div>LOGIN</div>
      <InputText/>
      <InputPass />

      

    </div>
    
  );
}

export default App;
