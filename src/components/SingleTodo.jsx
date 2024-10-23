import React, { Component } from 'react'

class SingleTodo extends Component {

    // handleDelete = (e) => {
    //     console.log(e.target.id)
    //     this.props.delFn(e.target.id);
    // };

    // handleComplete = (e) => {
    //     this.props.handleTodoComplete(e.target.checked, e.target.id)
    // }

    // handleInputChange = (e) => {
    //     this.props.handleTodoSave(e.target.value , e.target.id)
    //     console.log(e.target.value)
    // }

  render() {
    const {
        id,
        text,
        editMode,
        completed,
        handleTodoComplete,
        handleInputChange,
        handleSaveIdChange,
        handleEditIdChange,
        handleTodoDelete
    } = this.props;

    const customClass = completed ? "form-control line-thru" : "form-control";

    return (
        <div className="input-group mb-1">

        <span className="input-group-text">
            <input 
                // id={id}
                // onChange={this.handleComplete}
                checked={completed}
                onChange={(e) => handleTodoComplete(e.target.checked, id)} 
                type="checkbox" />
        </span>

        <input
            disabled={!editMode}
            onChange={(e) => handleInputChange(e.target.value, id)}
            type="text"
            className={customClass}
            value={text}
        />

        {editMode ? (
            <button
                onClick={() => handleSaveIdChange(id)}
                className="btn btn-success" 
                type="button">
                Save
            </button>
        ) : (
            <button
                onClick={() => handleEditIdChange(id)}
                className="btn btn-secondary" 
                type="button">
                Edit
            </button>
        )}

        <button
        //   id={id}
        //   onClick={this.handleDelete}
          onClick={() => handleTodoDelete(id)}
          className="btn btn-danger" 
          type="button">
          Delete
        </button>
      </div>
    );
  }
}

export default SingleTodo;