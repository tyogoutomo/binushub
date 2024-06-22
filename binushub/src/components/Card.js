import React from 'react';
import './Card.css';
import RenderIf from 'react-render-iff';

const TaskCard = ({ task, onComplete, onUnComplete }) => {
  const handleCompleteClick = () => {
    onComplete(task.id);
  };
  const handleUnCompleteClick = () => {
    onUnComplete(task.id);
  };

  return (
    <div className="card">
        {/* <RenderIf condition={task.completed}>
            <div className='title'>
                <h3><strike>{task.title}</strike></h3>
                <span className='card-important'><strike>{task.tag}</strike></span>
            </div>
        </RenderIf>
        <RenderIf condition={!task.completed}>
            <div className='title'>
                <h3>{task.title}</h3>
                <span className='card-important'>{task.tag}</span>
            </div>
        </RenderIf> */}
        <div className='title'>
                <h3>{task.title}</h3>
                <span className='card-important'>{task.tag}</span>
            </div>
        <p>{task.description}</p>
        <div className="card-footer">
            <span className='card-due'>Due: {task.dueDate}</span>
            {!task.completed && <button className='completed' onClick={handleCompleteClick}>Complete</button>}
            {task.completed && <button className='complete' onClick={handleUnCompleteClick}>Completed</button>}
        </div>
    </div>
  );
};

export default TaskCard;
