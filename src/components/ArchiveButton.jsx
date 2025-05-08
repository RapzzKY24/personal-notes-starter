import React from "react";

const ArchiveButton = ({ id, onArchive, label }) => {
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
            {label}
        </button>
    )
}
export default ArchiveButton