import './App.css'; 
import Icons from './components/Icons'; 
import Welcome from './components/Welcome'; 
import Card from './components/Card'; 
import Feedback from './components/Feedback'; 

const lightColors = ["lightpink", "lightsalmon", "lightcoral", "lightseagreen", "lightyellow", "lightblue", "lightgreen", "lavender", "lemonchiffon"];
const randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];

function App() { 
	return ( 
		<div className="app" style={{ backgroundColor: randomColor, minHeight: "120vh" }}> 
			<Welcome/> 
			<Icons/> 
			<Card/> 
			<Feedback/> 
			<img 
				src={process.env.PUBLIC_URL + '/images/contact-us-image.jpg'}
				style={{width: "50%", height: "auto", marginTop:"14%", marginLeft:"44%", borderRadius: "5%"}} 
			/> 
		</div> 
	); 
} 

export default App;
