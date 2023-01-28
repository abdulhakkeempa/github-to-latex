fetch("https://api.github.com/users/abdulhakkeempa/repos")
.then((response) => response.json())
.then((data) => getRepoNames(data))


function getRepoNames(data){
  for (const key in data) {
    console.log(data[key].name)
  }
}

//regular expression to check whether it's a file not a folder!
const fileRegex = /\.[^/.]+$/;

fetch("https://api.github.com/repos/abdulhakkeempa/freelance-project/git/trees/main?recursive=1")
.then((response) =>  response.json())
.then((data) => getFilesInRepo(data))

function getFilesInRepo(data){
  for (const key in data.tree) {
    if(fileRegex.test(data.tree[key].path)){
      console.log(data.tree[key].path)
    }  
  }
}