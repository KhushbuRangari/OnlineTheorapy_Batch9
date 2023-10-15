import React from 'react'

export default function Carousel() {

    const speciality ={
        name:["Gynaecology","Sexology","General Physician","Dermatology","Physchiatry"],
        price: [499,499,399,299,599]
    }

    const health = {
        name:["Cough & Cold?","Period problems","Skin Problems","Depression","Anxiety"],
        price: [499,499,399,299,599]
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h2>Skip the travel !</h2>
                        <h2>Take Online Doctor Consultation</h2>
                        <h5>Private consultation + Audio call · Starts at just ₹199</h5>
                        <button type="button" class="btn btn-info">Consult Now</button>
                    </div>
                    <div className="col-6">
                        <img height="100%" width="50%" src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="cards">
                            <h3>25+ Specialities</h3>
                            <h5>Consult with top doctors across specialities</h5>
                        </div>

                        <div className="health">
                            <h3>Common Health Concerns</h3>
                            <h5>Consult a doctor online for any health issue</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
