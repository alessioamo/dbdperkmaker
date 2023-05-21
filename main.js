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
            document.getElementById("iconEditor").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            break;
        case 7:
            document.getElementById("faq").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            break;
        case 8:
            document.getElementById("selectionButtonsDiv").style.display = "block";
            document.getElementById("onePerk").style.display = "none";
            document.getElementById("threePerks").style.display = "none";
            document.getElementById("killerPower").style.display = "none";
            document.getElementById("fullKiller").style.display = "none";
            document.getElementById("lore").style.display = "none";
            document.getElementById("iconEditor").style.display = "none";
            document.getElementById("faq").style.display = "none";
            document.getElementById("homeStuff").style.display = "none";
            document.getElementById("editTextButtonsDiv").style.display = "none";
            document.getElementById("body").style.paddingTop = "7%";
    }

    if (i != 8) {
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
var span = document.getElementById("close");

btn.onclick = function() {
    popupContainer.style.display = "block";
}

span.addEventListener('click', function() {
    popupContainer.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == popupContainer) {
        popupContainer.style.display = "none";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
        iconModal.style.display = "none";
    }
});

//how to use icon editor
var iconModal = document.getElementById("iconPopupContainer");
var iconBtn = document.getElementById("iconPopupClick");
var iconSpan = document.getElementById("closeP");

iconBtn.onclick = function() {
    iconPopupContainer.style.display = "block";
}

iconSpan.addEventListener('click', function() {
    iconPopupContainer.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == iconPopupContainer) {
        iconPopupContainer.style.display = "none";
    }
}