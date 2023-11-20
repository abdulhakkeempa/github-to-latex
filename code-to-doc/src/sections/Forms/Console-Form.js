import React, { useState } from 'react';

export default function RecordForm() {
  const [title, setTitle] = useState('');
  const [aim, setAim] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [githubRepo, setGithubRepo] = useState('');
  const [folderStructure, setFolderStructure] = useState('');

  const fetchRepoNames = (value, page) => {
    // Implement your function to fetch repository names here
  };

  const fetchRepoFiles = (value) => {
    // Implement your function to fetch repository files here
  };

  const incrementPageValues = (event) => {
    event.preventDefault();
    // Implement your function to increment page values here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your function to handle form submission here
  };

  const handleClear = () => {
    setTitle('');
    setAim('');
    setGithubUsername('');
    setGithubRepo('');
    setFolderStructure('');
  };

  return (
    <div className='mx-20 md:flex md:gap-x-10 justify-center'>
      <div className="col-span-12 md:col-span-6">
        <form id="record-form" onSubmit={handleSubmit}>
          <div className="mb-3 flex flex-col">
            <label htmlFor="title" className="form-label font-sans text-slate-200 text-base">Title</label>
            <input type="text" className="form-control text-white bg-slate-800 p-3 rounded" id="title" name="title" placeholder="FLOYD WARSHALL'S ALGORITHM" required value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="aim" className="form-label font-sans text-slate-200 text-base">Aim</label>
            <textarea type="text" className="form-control text-white bg-slate-800 p-3 rounded" id="aim" name="aim" placeholder="Program to implement Floyd Warshall's Algorithm" rows="10" required value={aim} onChange={(e) => setAim(e.target.value)}></textarea>
          </div>
          <div className="col-span-12 mb-3 md:flex md:items-center ">
            <div className="col-span-12 md:col-span-9 flex flex-col">
              <label htmlFor="github_repo" className="form-label font-sans text-slate-200 text-base">Github Repository Name</label>
              <select className="form-select text-white bg-dropdown" aria-label="Default select example" id="github_repo" name="github_repo" required value={githubRepo} onChange={(e) => setGithubRepo(e.target.value)} onBlur={() => fetchRepoFiles(githubRepo)}>
                <option value="0" selected>Your Github Repository</option>
              </select>
            </div>
            <div className="col-span-12 md:col-span-3">
              <button className="btn btn-secondary mt-2 ms-0 ms-md-2 mt-md-4 w-100" onClick={incrementPageValues}>
                Next Repositories
              </button>
            </div>
          </div>
          <div className="mb-3 col-span-12 text-secondary">
            If you don't find your repository on the dropdown, click the Next Repository button.
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="folder_structure" className="form-label font-sans text-slate-200 text-base">Repository Branch</label>
            <select className="form-select text-black bg-dropdown p-2 rounded" aria-label="Default select example" id="folder_structure" name="folder_structure" required value={folderStructure} onChange={(e) => setFolderStructure(e.target.value)}>
              <option value="0" selected></option>
            </select>
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="folder_structure" className="form-label font-sans text-slate-200 text-base">File Structure</label>
            <select className="form-select text-black bg-dropdown p-2 rounded" aria-label="Default select example" id="folder_structure" name="folder_structure" required value={folderStructure} onChange={(e) => setFolderStructure(e.target.value)}>
              <option value="0" selected>Your File</option>
            </select>
          </div>
          <div className="flex justify-center gap-2">
            <button type="submit" id="submit-button" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 shadow-lg transition duration-300 rounded-md">Generate</button>
            <button type="button" id="form-clear-button" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 shadow-lg transition duration-300 rounded-md" onClick={handleClear}>Clear</button>  
          </div>
        </form>
      </div>
      <div className="col-span-12 md:col-span-6">
        <form id="record-form" onSubmit={handleSubmit}>
          <div className="mb-3 flex flex-col">
            <label htmlFor="title" className="form-label font-sans text-slate-200 text-base">Title</label>
            <input type="text" className="form-control text-white bg-slate-800" id="title" name="title" placeholder="FLOYD WARSHALL'S ALGORITHM" required value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="aim" className="form-label font-sans text-slate-200 text-base">Aim</label>
            <textarea type="text" className="form-control text-white bg-slate-800" id="aim" name="aim" placeholder="Program to implement Floyd Warshall's Algorithm" rows="10" required value={aim} onChange={(e) => setAim(e.target.value)}></textarea>
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="github_username" className="form-label font-sans text-slate-200 text-base">Github Username</label>
            <input type="text" className="form-control text-white bg-slate-800" id="github_username" placeholder="abdulhakkeempa" name="github_username" required value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} onBlur={() => fetchRepoNames(githubUsername, 1)} />
          </div>
          <div className="col-span-12 mb-3 md:flex md:items-center ">
            <div className="col-span-12 md:col-span-9 flex flex-col">
              <label htmlFor="github_repo" className="form-label font-sans text-slate-200 text-base">Github Repository Name</label>
              <select className="form-select text-white bg-dropdown" aria-label="Default select example" id="github_repo" name="github_repo" required value={githubRepo} onChange={(e) => setGithubRepo(e.target.value)} onBlur={() => fetchRepoFiles(githubRepo)}>
                <option value="0" selected>Your Github Repository</option>
              </select>
            </div>
            <div className="col-span-12 md:col-span-3">
              <button className="btn btn-secondary mt-2 ms-0 ms-md-2 mt-md-4 w-100" onClick={incrementPageValues}>
                Next Repositories
              </button>
            </div>
          </div>
          <div className="mb-3 col-span-12 text-secondary">
            If you don't find your repository on the dropdown, click the Next Repository button.
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="folder_structure" className="form-label font-sans text-slate-200 text-base">File Structure</label>
            <select className="form-select text-white bg-dropdown" aria-label="Default select example" id="folder_structure" name="folder_structure" required value={folderStructure} onChange={(e) => setFolderStructure(e.target.value)}>
              <option value="0" selected>Your File</option>
            </select>
          </div>
          <div className="flex justify-center gap-2">
            <button type="submit" id="submit-button" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 shadow-lg transition duration-300 rounded-md">Generate</button>
            <button type="button" id="form-clear-button" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 shadow-lg transition duration-300 rounded-md" onClick={handleClear}>Clear</button>  
          </div>
        </form>
      </div>
    </div>
  );
}
