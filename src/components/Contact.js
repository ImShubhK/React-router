import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import People from './People';
import './Contact.css'

const Contact = () => {

  const [searchParams]=useSearchParams({name:"shu"})
  let id=searchParams.get("id");
  return (
    <div>
      <div className="content">Contact</div>
      <div className="people">
        <Link to="?id=virat">Virat kohli</Link>
        <Link to="?id=ratan ">Ratan tata</Link>
        <Link to="?id=Shubham">Shubham kumar</Link>
      </div>
      {id?<People name={id}/>:""}
    </div>
  );
}

export default Contact