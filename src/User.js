import React from 'react';
const User =(props)=>
{
  const {data}=props;
  return(
    <div>
      <h1> This is User Component</h1>
      <h4>{data.name}</h4>
      <h4>{data.email}</h4>
    </div>
  )
}

export default User;
