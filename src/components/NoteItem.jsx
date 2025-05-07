import React from "react";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils";

const NoteItem = ({title, body, createdAt, id, onDelete}) => {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <div className="note-item__title">{title}</div>
                <div className="note-item__date">{showFormattedDate(createdAt)}</div>
                <div className="note-item__body">{body}</div>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <button className="note-item__archive-button">Archive</button>
            </div>
        </div>
    )
}

export default NoteItem