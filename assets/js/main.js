var page = 1

function getRepoNames(data){
  repoList = document.getElementById("github_repo")
  repoList.innerHTML = ""
  repoList.innerHTML += `<option value="0">--- Choose your GitHub Repository ---</option>`
  for (const key in data) {
    repoList.innerHTML += `<option value="${data[key].name}">${data[key].name}</option>`
    console.log(data[key].name)
  }
}

//regular expression to check whether it's a file not a folder,also it avoids image,document files etc!
const fileRegex = /\.(?!jpg|jpeg|png|gif|csv|xlsx|xls|pdf|svg)[^/.]+$/i;



function getFilesInRepo(data){
  fileList = document.getElementById("folder_structure")
  fileList.innerHTML = ""
  for (const key in data.tree) {
    if(fileRegex.test(data.tree[key].path)){
      fileList.innerHTML += `<option value="${data.tree[key].path}">${data.tree[key].path}</option>`
      console.log(data.tree[key].path)
    }  
  }
}


function fetchRepoNames(username,page){
  fetch(`https://api.github.com/users/${username}/repos?page=${page}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Invalid Username");
    }
    return  response.json()
  })
  .then((data) => getRepoNames(data))
  .catch(function(err) {
    alert(err)
  });
}

function fetchRepoFiles(repository){
  username = document.getElementById("github_username").value
  fetch(`https://api.github.com/repos/${username}/${repository}/git/trees/main?recursive=1`)
  .then((response) =>  {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json()
  })
  .then((data) => getFilesInRepo(data))
  .catch(function(err) {
    alert(err)
  });
}

function incrementPageValues(e){
  e.preventDefault();
  page = page + 1
  username = document.getElementById("github_username").value
  if (!username){
    alert("Please fill the username field")
    return
  }
  fetchRepoNames(username, page)
}
