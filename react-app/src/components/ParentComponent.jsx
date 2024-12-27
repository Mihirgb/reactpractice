import React from 'react'
import StringConcat from './StringConcat';

const ParentComponent = () => {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };
    const user2 = {
      name: 'Kendrick Lamarr',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 120,
  };
  return (
    <div>
        <StringConcat user={user}/>
        <StringConcat user={user2}/>
    </div>
  )
}

export default ParentComponent