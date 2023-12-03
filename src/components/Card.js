export default function Card() { 
	return ( 
		<div> 
			<div className="h-52 ml-48 float-left -mt-10 w-96 flex-col rounded-xl bg-blue-200 bg-clip-border text-gray-700 shadow-2xl"> 
				<div className="p-6"> 
					<h5 className="text-center mr-4 mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased"> 
						Reach Us At 
					</h5> 
					<ul> 
						<li className="mt-2"> 
							<span><i className="fa fa-phone mr-2"></i></span> 
							-- Add contact number here -- 
						</li> 
						<li className="mt-2"> 
							<span><i className="fa fa-envelope mr-2"></i></span> 
							<span>-- Email Address --</span> 
						</li> 
						<li className="mt-2"> 
							<span><i className="fa-solid fa-map-pin mr-2"></i></span> 
							-- Address 1st line --
							<br />
							<span className="pl-4"> 
							-- Address 2nd line --
							</span> 
						</li> 
					</ul> 
				</div> 
			</div> 
			<div className="mr-36 w-96 text-center float-right -mt-11 w-1/3 flex-col rounded-xl bg-green-200 text-gray-700 shadow-2xl"> 
				<div className="p-6"> 
					<h5 className="mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased"> 
						-- Add anything here -- 
					</h5> 
					<i className="fa fa-handshake fa-2xl"></i> 
					<div className="text-left mt-4"> 
						<span><i className="fa fa-envelope mr-2"></i></span> 
						<span>-- email / text here --</span> 
					</div> 
					<div className="mt-2 text-left"> 
						<span><i className="fa-solid fa-map-pin mr-2"></i></span> 
						-- address / text here --
						<br />
						<span className="pl-5">
						-- address / text here --</span> 
					</div> 
				</div> 
			</div> 
		</div> 
	) 
}
