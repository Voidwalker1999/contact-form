export default function Navbar() { 
	return ( 
		<div style={{ backgroundImage: "url('/images/subtle-prism.svg')", borderRadius: "15px" }}>
			<nav classNameName="fixed w-full z-20 top-0 left-0"> 
				<div className="flex flex-wrap items-center justify-between mx-auto p-2.5"> 
					<a href="" className="flex items-center"> 
						<img src={process.env.PUBLIC_URL + "/images/e-commerce logo.png"} className="mr-2 h-12 w-12 rounded" alt="GFG Logo" /> 
						<span className="self-center text-2xl font-semibold "> 
							Schooler 
						</span>						 
					</a> 
					<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"> 
						<ul className="flex flex-col p-4 md:p-0 font-medium md:flex-row md:space-x-8"> 
							<li> 
								<a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"> 
									Home 
								</a> 
							</li> 
							<li> 
								<a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> 
									Products 
								</a> 
							</li> 
							<li> 
								<a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> 
									Contact Us 
								</a> 
							</li> 
						</ul> 
					</div> 
				</div> 
			</nav> 
		</div> 
	) 
}
