import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from "../utils";

const NoteItem = ({title, body, createdAt, id, onDelete, onArchive, archived}) => {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <div className="note-item__title">{title}</div>
                <div className="note-item__date">{showFormattedDate(createdAt)}</div>
                <div className="note-item__body">{body}</div>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchive={onArchive} label={archived ? "Unarchive" : "Archive"} />
            </div>
        </div>
    )
}

export default NoteItem