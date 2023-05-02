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

function getFormat(title, aim, data) {
  let code = '';
  
  // Check if custom_latex exists in localStorage
  if (localStorage.getItem("use_custom_code") === 'true' && localStorage.getItem('custom_latex') !== null) {
    code = localStorage.getItem('custom_latex');
  } else {
    code = `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`;
  }
  
  // Replace variables with values
  code = code.replace(/\${title}/g, title);
  code = code.replace(/\${aim}/g, aim);
  code = code.replace(/\${data}/g, data);
    
  document.getElementById('output').value += code;
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
    const toastLiveExample = document.getElementById('liveToast')
    document.getElementById("toast-content").innerHTML = "Please note that advanced settings can only be accessed on a PC. If you are using a mobile device or tablet, you may not be able to access these settings."
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
  } else {
  // Get the modal element
  const myModal = document.getElementById('staticBackdrop');
  
  // Show the modal using the Bootstrap JavaScript API
  const modal = new bootstrap.Modal(myModal);
  modal.show();  

  if(localStorage.getItem("custom_latex") !== null){
    // myItemKey exists in localStorage
    var form = document.getElementById("custom-latex");
    form.latex_custom.value = localStorage.getItem("custom_latex")
    form.use_custom_code.value = localStorage.getItem("use_custom_code")
  }
}});


document.getElementById("custom-latex").onsubmit = (e) => {
  e.preventDefault();

  modalAlert = document.getElementById("modalAlert")

  const appendAlert = (message, type) => {
    modalAlert.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  }

  const form = document.getElementById("custom-latex");

  if (form.use_custom_code.value !== "false" && form.latex_custom.value === ""){
    appendAlert("Custom Latex Code can not be enabled with Latex Code being Empty","info")
    return
  }

  available_variables = ['${title}','${aim}','${data}']

  //extracting the variables out of the latex code.
  const latex_code = form.latex_custom.value;
  console.log(latex_code)
  const regex = /\$\{[a-zA-Z0-9]+\}/g
  const user_variables = latex_code.match(regex);
  console.log(user_variables)
  
  try {
    const invalid_variables = user_variables.filter(match => !available_variables.includes(match));
    if (invalid_variables.length === 0) {
      //saving the custom code, when there are no invalid variables
      localStorage.setItem("custom_latex",form.latex_custom.value);
      localStorage.setItem("use_custom_code",form.use_custom_code.value);
      appendAlert('Settings saved successfully', 'success');
    } else {
      appendAlert(`Invalid variables found ${invalid_variables}`, 'warning');
    }   
  } catch (error) {
    console.log(error)
  }

}

function insertVariable(variableName) {
  var textarea = document.getElementById("latex_custom");
  var cursorPosition = textarea.selectionStart;
  var currentValue = textarea.value;
  var newValue = currentValue.substring(0, cursorPosition) + variableName + currentValue.substring(textarea.selectionEnd);
  textarea.value = newValue;
  textarea.setSelectionRange(cursorPosition + variableName.length, cursorPosition + variableName.length);
  textarea.focus();
}
