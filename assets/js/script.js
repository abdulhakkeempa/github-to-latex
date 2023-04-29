document.getElementById("record-form").onsubmit = (e) => {
  e.preventDefault();
  var form = document.getElementById("record-form");
  title = form.title.value
  aim = form.aim.value
  fetch_url = `https://raw.githubusercontent.com/${form.github_username.value}/${form.github_repo.value}/main/${form.folder_structure.value}`
  fetch(fetch_url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.text()
  })
  .then((text) => {
    getFormat(title,aim,text);
  })
  .catch(function() {
    alert("Provide Valid Details")
  });
}

function getFormat(title,aim,data){
  code = 
  `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	\\begin{center}
		%%Title of the Program
		\\large\\textbf{${title}}
	\\end{center}
	
	\\begin{flushleft}
		\\textbf{AIM }
	\\end{flushleft} 
  %%Insert AIM of your program here
        ${aim}    
    \\begin{flushleft}
      \\textbf{PROGRAM}
    \\end{flushleft}
  %%Insert the program code here
    \\begin{verbatim}
    ${data}
    \\end{verbatim}
    \\begin{flushleft}
      \\textbf{SAMPLE INPUT-OUTPUT}
    \\end{flushleft} 
  %%Insert screen shot of sample output as image file as filename.png
    \\includegraphics[scale=0.5]{}
    \\includegraphics[scale=0.5]{}
    \\newpage
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`
  document.getElementById("output").value += code
}

document.getElementById("copy-icon").onclick = () => {
  document.getElementById("copy-icon").innerHTML = `<i class="bi bi-clipboard-check-fill text-success h6"></i>`;
  navigator.clipboard.writeText(document.getElementById("output").value);

  // Set a timeout of 2 seconds to reset the icon
  setTimeout(() => {
    document.getElementById("copy-icon").innerHTML = `<i class="bi bi-clipboard text-white h6"></i>`;
  }, 1400);
  // alert("Copied to Clipboard");
}

document.getElementById("clear-icon").onclick = () => {
  document.getElementById("output").value = "";
}

const clearButton = document.getElementById("form-clear-button");

clearButton.addEventListener("click", () => {
  const form = document.getElementById("record-form");
  form.reset();
});

const settingsButton = document.getElementById("settings-icon");

settingsButton.addEventListener("click", () => {

  const isMobile = navigator.userAgent.match(/Mobi/);

  // If the device is mobile, log a message to the console
  if (isMobile) {
    console.log('This is a mobile device');
  } else {
  // Get the modal element
  const myModal = document.getElementById('staticBackdrop');
  
  // Show the modal using the Bootstrap JavaScript API
  const modal = new bootstrap.Modal(myModal);
  modal.show();  
}
});