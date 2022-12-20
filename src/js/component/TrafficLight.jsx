import React from "react";




//create your first component
const TrafficLight = () => {
	return (
	<>
	<div className="cable mx-auto"></div>
	<div className="box d-flex flex-column align-items-center mx-auto">
		<div className='red light'></div>
		<div className='yellow light'></div>
		<div className='green light'></div>
		
	</div>
	</>	
	);
};

export default TrafficLight;
