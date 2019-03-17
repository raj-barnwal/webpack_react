import React from 'react';

const User = (props) =>  {
        return (
            <div className="details-card">
                <i className="delete-icon" onClick={props.deleteEmpInfo}>
                    <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.886 0c-.572 0-1.043.471-1.043 1.043v.696H1.125a.348.348 0 0 0-.14 0h-.62a.348.348 0 1 0 0 .696h.347v12.522c0 .572.471 1.043 1.044 1.043h9.043c.573 0 1.044-.471 1.044-1.043V2.435h.348a.348.348 0 1 0 0-.696H8.712v-.696C8.712.471 8.242 0 7.67 0H4.886zm0 .696H7.67c.193 0 .348.155.348.347v.696H4.538v-.696c0-.192.155-.347.348-.347zM1.408 2.435h9.74v12.522a.347.347 0 0 1-.349.347H1.756a.347.347 0 0 1-.348-.347V2.435zm2.75 1.728a.348.348 0 0 0-.043.01.348.348 0 0 0-.272.349v8.695a.348.348 0 1 0 .695 0V4.522a.348.348 0 0 0-.38-.359zm2.087 0a.348.348 0 0 0-.044.01.348.348 0 0 0-.271.349v8.695a.348.348 0 1 0 .695 0V4.522a.348.348 0 0 0-.38-.359zm2.087 0a.348.348 0 0 0-.044.01.348.348 0 0 0-.271.349v8.695a.348.348 0 1 0 .695 0V4.522a.348.348 0 0 0-.38-.359z" fill="#8C8D94" fillRule="nonzero" />
                    </svg>
                </i>
                <div className="single-row">
                    <div>
                        Employee Id:
                    </div>
                    <div>
                        {props.id}
                    </div>
                </div>

                <div className="single-row">
                    <div>
                        Name:
                    </div>
                    <div>
                        {props.name}
                    </div>
                </div>
                <div className="single-row">
                    <div>
                        Competency:
                    </div>
                    <div>
                        {props.competency}
                    </div>
                </div>
                <div className="single-row">
                    <div>
                        Contact:
                    </div>
                    <div>
                        {props.contact}
                    </div>
                </div>
                <div className="single-row">
                    <div>
                        Email:
                    </div>
                    <div>
                        {props.email}
                    </div>
                </div>
            </div>
        )
};

export default User;

