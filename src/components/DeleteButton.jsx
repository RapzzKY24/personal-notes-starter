import React from "react";

const DeleteButton = ({ id,onDelete }) => {
    return <button className="note-item__delete-button" onClick={()=>onDelete(id)}>delete</button>
}

export default DeleteButton