var images =[
    "./images/background2.jpg"
]

var imageHead = document.getElementById("body");
var tempRandom = Math.floor(Math.random()*(images.length));
imageHead.style.backgroundImage = "url(" + images[tempRandom] + ")";
imageHead.style.backgroundRepeat = "no-repeat";
imageHead.style.backgroundAttachment = "fixed";
imageHead.style.backgroundSize = "cover";


function switchPage(i) {
    document.getElementById("selectionButtonsDiv").style.display = "none";
    switch (i) {
        case 1:
            document.getElementById("onePerk").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "4%";
            break;
        case 2:
            document.getElementById("threePerks").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "4%";
            break;
        case 3:
            document.getElementById("killerPower").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "4%";
            break;
        case 4:
            document.getElementById("fullKiller").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "4%";
            break;
        case 5:
            document.getElementById("lore").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "2%";
            break;
        case 6:
            document.getElementById("faq").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            break;
        case 7:
            document.getElementById("selectionButtonsDiv").style.display = "block";
            document.getElementById("onePerk").style.display = "none";
            document.getElementById("threePerks").style.display = "none";
            document.getElementById("killerPower").style.display = "none";
            document.getElementById("fullKiller").style.display = "none";
            document.getElementById("lore").style.display = "none";
            document.getElementById("faq").style.display = "none";
            document.getElementById("homeStuff").style.display = "none";
            document.getElementById("editTextButtonsDiv").style.display = "none";
            document.getElementById("body").style.paddingTop = "7%";
    }

    if (i != 7) {
        document.getElementById("homeStuff").style.display = "block";
    }
}

function checkCharacterCount() {
    numberOfCharacters = 0;
    inputText = document.getElementById("perkTitle").value;
    for (i = 0; i < inputText.length; i++) {
        numberOfCharacters += 1;
    }
    if (numberOfCharacters > 15) {
        document.getElementById("perkTitle").style.fontSize = "25px"
    }
    else {
        document.getElementById("perkTitle").style.fontSize = "30px"
    }
}

function blackBackgroundCheck() {
    checkbox = document.getElementById("blackBackgroundCheck");
    if(checkbox.value == "no"){
        document.getElementById("blackBackgroundCheck").style.backgroundColor = "rgb(122, 58, 108)";
        document.getElementById("onePerk").style.backgroundColor = "black";
        document.getElementById("threePerks").style.backgroundColor = "black";
        document.getElementById("killerPower").style.backgroundColor = "black";
        document.getElementById("fullKiller").style.backgroundColor = "black";
        document.getElementById("lore").style.backgroundColor = "black";
        checkbox.value = "yes";
    }
    else {
        document.getElementById("blackBackgroundCheck").style.backgroundColor = "rgb(170, 19, 137)";
        document.getElementById("onePerk").style.backgroundColor = "";
        document.getElementById("threePerks").style.backgroundColor = "";
        document.getElementById("killerPower").style.backgroundColor = "";
        document.getElementById("fullKiller").style.backgroundColor = "";
        document.getElementById("lore").style.backgroundColor = "";
        checkbox.value = "no";
    }
}

//from this link https://stackoverflow.com/questions/50286692/changing-a-small-amount-of-text-in-a-textarea-to-bold
function changeStyle(style) {
    var sel = window.getSelection(); // Gets selection
    console.log("R = " + sel.rangeCount);
    if (sel.rangeCount) {
      // Creates a new element, and insert the selected text with the chosen style
      var e = document.createElement('span');
      e.classList.add(style.value); // Selected style (class)
      e.innerHTML = sel.toString(); // Selected text
  
      // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
      var range = sel.getRangeAt(0);
      range.deleteContents(); // Deletes selected text…
      range.insertNode(e); // … and inserts the new element at its place
    }
  }

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log(text);
}

var loadPerkIcon = function(event) {
    var image = document.getElementById('output');
    image.src=URL.createObjectURL(event.target.files[0]);
};

var loadPerk1Icon = function(event) {
    var image = document.getElementById('output1');
    image.src=URL.createObjectURL(event.target.files[0]);
};

var loadPerk2Icon = function(event) {
    var image = document.getElementById('output2');
    image.src=URL.createObjectURL(event.target.files[0]);
};

var loadPerk3Icon = function(event) {
    var image = document.getElementById('output3');
    image.src=URL.createObjectURL(event.target.files[0]);
};

var killerPowerIcon = function(event) {
    var image = document.getElementById('output4');
    image.src=URL.createObjectURL(event.target.files[0]);
};

var fullKillerPowerIcon = function(event) {
    var image = document.getElementById('output5');
    image.src=URL.createObjectURL(event.target.files[0]);
};

var fullKillerPerk1Icon = function(event) {
    var image = document.getElementById('output6');
    image.src=URL.createObjectURL(event.target.files[0]);
};

var fullKillerPerk2Icon = function(event) {
    var image = document.getElementById('output7');
    image.src=URL.createObjectURL(event.target.files[0]);
};

var fullKillerPerk3Icon = function(event) {
    var image = document.getElementById('output8');
    image.src=URL.createObjectURL(event.target.files[0]);
};

//for collpasable in FAQ
var coll = document.getElementsByClassName("collapsibleQuestion");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    // Close all other sections
    var j;
    for (j = 0; j < coll.length; j++) {
        if (coll[j] !== this) {
            coll[j].classList.remove("active");
            coll[j].nextElementSibling.style.maxHeight = null;
        }
    }

    // Open the clicked section
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
    });
}

//sidebar
function openCloseNav() {
    if (sidebar.style.left === "-250px") {
        document.getElementById("sidebarLinks").style.left = "0px";
    }
    else {
        document.getElementById("sidebarLinks").style.width = "-250px";
    }
    sideBarCounter++;
}
function openNav() {
    document.getElementById("sidebarLinks").style.left = "0px";
}
  
function closeNav() {
    document.getElementById("sidebarLinks").style.left = "-250px";
}

//update notes
var modal = document.getElementById("popupContainer");
var btn = document.getElementById("welcomeMessageID");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    popupContainer.style.display = "block";
}

span.onclick = function() {
    popupContainer.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popupContainer) {
        popupContainer.style.display = "none";
    }
}




// const myElement = document.getElementById('threePerks');
// //myElement.crossOrigin = "anonymous";
// function saveImage() {
//     html2canvas(myElement).then(canvas => {
//         // Create a temporary link element to download the image
//         const link = document.createElement('a');
//         link.download = 'my-image.png';
//         link.href = canvas.toDataURL();
//         // Simulate a click on the link to start the download
//         link.click();
//       });
// }

// const downloadBtn = document.getElementById('saveImageButton');
// const myElement = document.getElementById('threePerks');

// // Add click event listener to the download button
// downloadBtn.addEventListener('click', () => {
//     console.log("saving");
//   // Use html2canvas to capture the HTML element and convert it to an image
//   html2canvas(myElement).then(canvas => {
//     // Create a temporary link element to download the image
//     const link = document.createElement('a');
//     link.download = 'my-image.png';
//     link.href = canvas.toDataURL();
//     // Simulate a click on the link to start the download
//     link.click();
//   });
// });

// //best one so far
// function downloadImage() {
//     // Get the HTML element to be converted
//     const element = document.getElementById('threePerks');
  
//     // Create a new window with the element and a print stylesheet
//     const windowContent = '<!DOCTYPE html><html><head><title></title><style> @media print { body { margin: 0; padding: 0; } img, video { max-width: 100% !important; height: auto !important; } } </style></head><body>' + element.innerHTML + '</body></html>';
//     const printWindow = window.open('', '', 'height=600,width=800');
  
//     // Write the window content and print it
//     printWindow.document.write(windowContent);
//     printWindow.document.close();
//     printWindow.focus();
//     printWindow.print();
  
//     // Close the window
//     printWindow.close();
//   }

function downloadImage() {
    const element = document.getElementById("threePerks");
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.onload = function() {
      context.drawImage(image, 0, 0);
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    image.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${new XMLSerializer().serializeToString(element)}
          </div>
        </foreignObject>
      </svg>
    `)));
  }