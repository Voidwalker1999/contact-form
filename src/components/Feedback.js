export default function Feedback() {
	const handleSubmit = (event) => {
		event.preventDefault();

		// Get the form data
		const form = event.target;
		const formData = new FormData(form);

		// Send the email
		fetch('https://api.example.com/send-email', {
			method: 'POST',
			body: formData,
		})
			.then((response) => {
				if (response.ok) {
					console.log('Email sent successfully');
				} else {
					console.error('Failed to send email');
				}
			})
			.catch((error) => {
				console.error('Failed to send email:', error);
			});
	};

	return (
		<div className="absolute mt-52 ml-48 w-80 float-left border-2 p-2 rounded-xl shadow-xl text-xl">
			<form onSubmit={handleSubmit}>
				<p className="text-2xl">Feedback & Queries</p>
				<div>
					<label className="text-sm">Select Issue*</label>
					<br></br>
					<select className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:border-blue-500 w-full p-2.5">
						<option value="Feedback">-- Select Your Query --</option>
						<option value="Feedback">Feedback</option>
						<option value="Feedback">General Queries or Issues</option>
						<option value="Feedback">Payment Related Queries or Issues</option>
						<option value="Feedback">Product Related Queries or Issues</option>
						<option value="Feedback">Others</option>
					</select>
					<br></br>
					<label className="text-sm">Email Address*</label>
					<br></br>
					<input
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
						type="email"
						name="email"
						placeholder="abc@example.com"
						required
					/>
					<br></br>
					<label className="text-sm">Contact No. (Optional)</label>
					<br></br>
					<input
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
						type="text"
						name="contactNo"
						placeholder="123456789"
					/>
					<br></br>
					<label className="text-sm">Drop Your Query</label>
					<br></br>
					<textarea
						className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
						name="query"
						rows="4"
						cols="25"
						maxLength="500"
						placeholder="Max Allowed Characters: 500"
						required
					></textarea>
					<br></br>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
