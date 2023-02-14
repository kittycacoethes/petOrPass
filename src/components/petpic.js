import React from 'react';
import orangecat from '../components/orangecat.jpg';

class PetPic extends React.Component {

    constructor(props){
        super(props)
        this.cat = {
            name: "Nyra",
            image: orangecat,
            traits: ["Loves tuna", "Very chonky", "Is orange"]
        }
    }

    render(){
        return (
            <div class="card col-md-6 offset-md-3">
                <img src={this.cat.image} alt="an orange cat" class="card-img-top"></img>
                <div class="card-body">
                <h5 class="card-title">{this.cat.name}</h5>
                <p class="card-text">
                    <ul>
                        {
                            this.cat.traits.map((traits,index)=>{
                                return <li key={index}>{traits}</li>
                            })
                        }
                    </ul>
                </p>
                    <a href="#" class="btn btn-primary mx-5">Pet</a>
                    <a href="#" class="btn btn-primary mx-5">Pass</a>
                </div>
            </div>
        )
    }
}

export default PetPic;