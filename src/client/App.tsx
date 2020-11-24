import * as React from 'react';

const App = (props: AppProps) => {
	const [file, setFile] = React.useState<File>(null);
	const [title, setTitle] = React.useState<string>('');
	const [content, setContent] = React.useState<string>('');

	const handleBlogSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const newBlog = new FormData();
		newBlog.append('title', title);
		newBlog.append('content', content);
		newBlog.append('photo', file);

		const res = await fetch('/api/blogs', {
			method: 'POST',
			body: newBlog
		});
		
		const wtf = await res.json();
		console.log(wtf);
	};

	return (
		<main className="container mt-5">
			<section className="row justify-content-center">
				<div className="col-md-6">
					<form className="form-group p-3 bg-light text-dark border rounded">
						<label htmlFor="title">Title</label>
						<input
							value={title}
							onChange={e => setTitle(e.target.value)}
							type="text"
							className="form-control"
						/>
						<div className="d-flex align-items-center justify-content-between">
							<img
								src={
									file
										? URL.createObjectURL(file)
										: 'https://via.placeholder.com/64'
								}
								style={{ width: '64px', height: 'auto' }}
								className="image-thumbnail"
							/>
							<input
								onChange={e => setFile(e.target.files[0])}
								type="file"
								className="form-control-file"
								id="Blog Image"
							/>
						</div>
						<label htmlFor="title">Content</label>
						<textarea
							value={content}
							onChange={e => setContent(e.target.value)}
							rows={10}
							className="form-control"
						/>
						<div className="d-flex justify-content-center mt-3">
							<button
								onClick={handleBlogSubmit}
								className="btn btn-secondary shadow-sm">
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
};

interface AppProps {}

export default App;
