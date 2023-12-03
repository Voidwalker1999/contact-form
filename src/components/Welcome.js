import Navbar from "./Navbar"; 

export default function Welcome() { 
	return ( 
		<div
		style={{ backgroundImage: "url('/images/sun-tornado.svg')" }} 
		className="h-48 bg-gray-200 px-24"> 
			<Navbar/> 
			<h1 className="pt-4 text-center text-slate 
						font-semibold text-3xl"> 
				-- Schooler App -- Contact US Page 
			</h1> 
		</div> 
	); 
}
