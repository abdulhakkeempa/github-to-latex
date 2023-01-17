document.getElementById("record-form").onsubmit = (e) => {
  e.preventDefault();
  var form = document.getElementById("record-form")
  fetch_url = `https://raw.githubusercontent.com/${form.github-username.value}/${form.github-repo.value}/main/${form.folder_structure.value}`
}

