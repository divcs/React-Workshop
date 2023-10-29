import React from 'react'
import Header from '../components/Header';

export const User = ({userAllData}) => {
  return (
    <>
    <Header/>
    {userAllData.map((dt, index) => {
        return (
          <>
            <h3>
              {dt.id}, {dt.email}, {dt.first_name}, {dt.last_name},
              <img src={dt.avatar} alt='Avatar'/>
            </h3>
          </>
        );
      })}
    </>
  )
}
