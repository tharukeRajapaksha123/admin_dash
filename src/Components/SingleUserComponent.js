import React from 'react'
import { useParams } from 'react-router-dom'


const SingleUserComponent = () => {
    const params = useParams()
    const id = params.id
  return (
    <div>
        <p>
            {id}
            asdjkbakdj njasdhja asjdhask {id}
        </p>
    </div>
  )
}

export default SingleUserComponent