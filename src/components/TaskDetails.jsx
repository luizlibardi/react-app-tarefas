import React from 'react';
import { useParams, useHistory} from 'react-router';

import Button from './Button';
import './TaskDetails.css';



const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    console.log(params);

        return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aperiam id magni illo ducimus. Nisi?</p>
            </div>
        </>
        );
}
 
export default TaskDetails;