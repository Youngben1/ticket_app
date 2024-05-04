import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteBlock = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faX} className="text-red-500 hover:text-red-300 hover:cursor-pointer" />
    </div>
  )
}

export default DeleteBlock