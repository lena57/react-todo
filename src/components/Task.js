import React, {useState} from "react";

const Task = ({ task, updateTask }) => {
  const [open, setOpen] = useState(false);
  const [inputUpdate, setInputUpdate] = useState(task.title);

  const toggle=()=>{
    setOpen(!open);
    setInputUpdate(task.title);
  }

  const handleSave = () => {
    updateTask(task.id, inputUpdate);
    toggle();
  }

  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between">{task.title}
      {open && <div className="d-flex justify-content-between align-items-center">
        <input 
          type="text" 
          className="form-control"
          style={{width: "200px"}}
          value={inputUpdate} 
          onChange={(e)=>setInputUpdate(e.target.value)}/>
        <button onClick={handleSave} className="btn btn-outline-success">Save</button>
        <button onClick={toggle} className="btn btn-outline-danger">Cancel</button>
      
      
      </div>}
      {!open && 
        <button onClick={toggle} className="btn btn-outline-primary">Update</button>}
      </div>
    </div>
  );
};

export default Task;
