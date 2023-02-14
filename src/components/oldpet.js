import React from 'react';
import orangecat from '../components/orangecat.jpg';

class OldPet extends React.Component {
    render(){
        return (
            <div class="card mb-3 col-md-8 offset-2">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={orangecat} class="img-fluid rounded-start" alt="an orange cat"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Previous Pet Name</h5>
                            <p class="card-text">number% of voters chose to pet PreviousPet!</p>
                        </div>
                    </div>
                </div>
            </div>      
        )
    }
}

export default OldPet;