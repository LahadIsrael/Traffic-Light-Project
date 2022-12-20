import React,{useState} from "react";




//create your first component
const TrafficLight = () => {
	const [ color, setColor] = useState("red");

	return (
	<>
	<div className="cable mx-auto"></div>
	<div className="box d-flex flex-column align-items-center mx-auto">
		<div className={color === 'red' ? 'red light glow': 'red light'} onClick={() => setColor("red")}></div>
		<div className={color === 'yellow'? 'yellow light glow' : 'yellow light'} onClick={() => setColor('yellow')}></div>
		<div className={color=== 'green' ? 'green light glow' : 'green light'} onClick={() => setColor('green')}></div>
		
	</div>
	</>	
	);
};

export default TrafficLight;
