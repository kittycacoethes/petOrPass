import React from 'react';
import orangecat from '../components/orangecat.jpg';

class PetPic extends React.Component {
    render(){
        return (
            <div class="card col-md-8 offset-md-2">
                <img src={orangecat} alt="an orange cat" class="card-img-top"></img>
                <div class="card-body">
                    <a href="#" class="btn btn-primary mx-5">Pet</a>
                    <a href="#" class="btn btn-primary mx-5">Pass</a>
                </div>
            </div>
        )
    }
}

export default PetPic;