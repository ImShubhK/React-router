import React from 'react'

const People = (props) => {
  const {name}=props
  return (
    <div className="detail">
      <div>Name: {name.toUpperCase()}</div>
      <div>Email: {name}@example.com</div>
    </div>
  );
}

export default People