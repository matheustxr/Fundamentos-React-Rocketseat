import React, { useEffect, useState } from 'react'

import "./style.css";

import {Card, CardProps} from '../../componentes/card'

type APIResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {

  //ESTADOS 
  const [studentName, setStudentName] = useState(''); // primeiro onde eu vou guardar o estado da variavel e dps a função que atualiza o estado
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState <User> ({} as User) ;

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    //corpo do useEffect => tudo que eu quero que execute, é executado assim que a interface fpr renderizado
    
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/matheustxr')
      const data = await response.json() as APIResponse
      console.log("DADOS ===> ", data )

      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }
    
    fetchData()
  },[])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil" />
        </div>
      </header>
      
      <input type="text" placeholder="Digite seu nome..." onChange={e => setStudentName(e.target.value)}/>
      
      <button type="button" onClick={handleAddStudent}> Adicionar </button>

      {
      students.map(student => <Card key={student.time} name={student.name} time={student.time} />)
      }

    </div>
  )
}


