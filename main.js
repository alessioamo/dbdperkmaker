// var images =[
//     "./images/background2.jpg"
// ]

// var imageHead = document.getElementById("body");
// var tempRandom = Math.floor(Math.random()*(images.length));
// imageHead.style.backgroundImage = "url(" + images[tempRandom] + ")";
// imageHead.style.backgroundRepeat = "no-repeat";
// imageHead.style.backgroundAttachment = "fixed";
// imageHead.style.backgroundSize = "cover";
let currentPage;
let listOfPages = ["Home", "One Perk", "Three Perks", "Killer Power", "Full Killer", "Addon/Item", "Lore", "iconEditor" , "faq", "profile"];

const numberOfImageUploads = 10;
let uploadedImages = new Array(numberOfImageUploads);

function getCurrentPage() {
    return currentPage;
}

function switchPage(i) {
    document.getElementById("selectionButtonsDiv").style.display = "none";
    switch (i) {
        case 0:
            document.getElementById("selectionButtonsDiv").style.display = "block";
            document.getElementById("onePerk").style.display = "none";
            document.getElementById("threePerks").style.display = "none";
            document.getElementById("killerPower").style.display = "none";
            document.getElementById("fullKiller").style.display = "none";
            document.getElementById("createAddon").style.display = "none";
            document.getElementById("lore").style.display = "none";
            document.getElementById("iconEditor").style.display = "none";
            document.getElementById("profile").style.display = "none";
            document.getElementById("faq").style.display = "none";
            document.getElementById("homeStuff").style.display = "none";
            document.getElementById("editTextButtonsDiv").style.display = "none";
            document.getElementById("body").style.paddingTop = "7%";
            break;
        case 1:
            document.getElementById("onePerk").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            document.getElementById("backgroundPerkDropdown").style.display = "inline-block";
            document.getElementById("backgroundAddonDropdown").style.display = "none";
            document.getElementById("backgroundItemDropdown").style.display = "none";
            document.getElementById("swapAddonItemButton").style.display = "none";
            break;
        case 2:
            document.getElementById("threePerks").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            document.getElementById("backgroundPerkDropdown").style.display = "inline-block";
            document.getElementById("backgroundAddonDropdown").style.display = "none";
            document.getElementById("backgroundItemDropdown").style.display = "none";
            document.getElementById("swapAddonItemButton").style.display = "none";
            break;
        case 3:
            document.getElementById("killerPower").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            document.getElementById("backgroundPerkDropdown").style.display = "none";
            document.getElementById("backgroundAddonDropdown").style.display = "none";
            document.getElementById("backgroundItemDropdown").style.display = "none";
            document.getElementById("swapAddonItemButton").style.display = "none";
            break;
        case 4:
            document.getElementById("fullKiller").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            document.getElementById("backgroundPerkDropdown").style.display = "inline-block";
            document.getElementById("backgroundAddonDropdown").style.display = "none";
            document.getElementById("backgroundItemDropdown").style.display = "none";
            document.getElementById("swapAddonItemButton").style.display = "none";
            break;
        case 5:
            document.getElementById("createAddon").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            document.getElementById("backgroundPerkDropdown").style.display = "none";
            if (document.getElementById("swapAddonItemButton").textContent == "To Item") {
                document.getElementById("backgroundAddonDropdown").style.display = "inline-block";
                document.getElementById("backgroundItemDropdown").style.display = "none";
            }
            else {
                document.getElementById("backgroundAddonDropdown").style.display = "none";
                document.getElementById("backgroundItemDropdown").style.display = "inline-block";
            }
            
            document.getElementById("swapAddonItemButton").style.display = "inline-block";
            break;
        case 6:
            document.getElementById("lore").style.display = "block";
            document.getElementById("editTextButtonsDiv").style.display = "block";
            document.getElementById("body").style.paddingTop = "2%";
            document.getElementById("backgroundPerkDropdown").style.display = "none";
            document.getElementById("backgroundAddonDropdown").style.display = "none";
            document.getElementById("backgroundItemDropdown").style.display = "none";
            document.getElementById("swapAddonItemButton").style.display = "none";
            break;
        case 7:
            // Temp fix to load icons that didnt load properly
            searchThroughIcons();

            document.getElementById("iconEditor").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            break;
        case 8:
            document.getElementById("faq").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            break;
        case 9:
            document.getElementById("profile").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
    }

    currentPage = listOfPages[i];

    if (i != 0) {
        document.getElementById("homeStuff").style.display = "block";
    }
}

// let savedConcepts = [
//     // {
//     //     name: "",
//     //     type: "",
//     //     dateCreated: "",
//     //     data: ""
//     // }
// ];

let savedConcepts = [
    // {
    //     name: "test",
    //     type: "One Perk",
    //     dateCreated: "2024-07-03",
    //     data: "3ddd"
    // },
    // {
    //     name: "test2",
    //     type: "Three Perks",
    //     dateCreated: "2",
    //     data: "3"
    // },
    // {
    //     name: "test3",
    //     type: "One Perk",
    //     dateCreated: "2",
    //     data: "3"
    // }
];
let firstTimeVisit;

/* Save and Load */

// function handleSaveShortcut(event) {
//     if ((event.ctrlKey || event.metaKey) && event.key === 's') {
//         event.preventDefault();
//         saveProfileConcepts();
//         console.log('Saved to local storage');
//     }
// }

// document.addEventListener('keydown', handleSaveShortcut);

function saveProfileConcepts() {
    localStorage.setItem('savedConcepts', JSON.stringify(savedConcepts));
    localStorage.setItem('firstTimeVisit', JSON.stringify(firstTimeVisit));
}

function loadProfileConcepts() {
    var concepts = JSON.parse(localStorage.getItem('savedConcepts'));
    if (concepts == null) {
        concepts = [];
    }
    return concepts;
}

document.addEventListener('DOMContentLoaded', function() {
    savedConcepts = loadProfileConcepts();
    // console.log("1 " + firstTimeVisit);
    firstTimeVisit = localStorage.getItem('firstTimeVisit');
    if (firstTimeVisit) {
        document.getElementById("firstTimePopup").style.display = "none";
    }
    else {
        document.getElementById("firstTimePopup").style.display = "flex";
    }
    // console.log("2 " + firstTimeVisit);
});

function deleteFirstTimeVisit() {
    localStorage.removeItem('firstTimeVisit');
}

// deleteFirstTimeVisit();

/* Save and Load */

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
    checkbox = document.getElementById("blackBackgroundCheckButton");
    const selectedTheme = themes[getCurrentTheme()];
    
    if(checkbox.value == "no"){
        // change color for christmas
        //document.getElementById("blackBackgroundCheckButton").style.backgroundColor = "rgb(122, 58, 108)";
        checkbox.style.backgroundColor = selectedTheme.blackBackgroundCheckButton.checkedColor;
        // document.getElementById("blackBackgroundCheckButton").style.backgroundColor = "rgb(226, 0, 0)"; // Christmas color
        document.getElementById("onePerk").style.backgroundColor = "black";
        document.getElementById("threePerks").style.backgroundColor = "black";
        document.getElementById("killerPower").style.backgroundColor = "black";
        document.getElementById("fullKiller").style.backgroundColor = "black";
        document.getElementById("createAddon").style.backgroundColor = "black";
        document.getElementById("lore").style.backgroundColor = "black";
        checkbox.value = "yes";
    }
    else {
        // change color for christmas
        //document.getElementById("blackBackgroundCheckButton").style.backgroundColor = "rgb(170, 19, 137)";
        checkbox.style.backgroundColor = selectedTheme.blackBackgroundCheckButton.uncheckedColor;
        // document.getElementById("blackBackgroundCheckButton").style.backgroundColor = "rgb(19, 170, 32)"; // Christmas color
        document.getElementById("onePerk").style.backgroundColor = "";
        document.getElementById("threePerks").style.backgroundColor = "";
        document.getElementById("killerPower").style.backgroundColor = "";
        document.getElementById("fullKiller").style.backgroundColor = "";
        document.getElementById("createAddon").style.backgroundColor = "";
        document.getElementById("lore").style.backgroundColor = "";
        checkbox.value = "no";
    }
}

//from this link https://stackoverflow.com/questions/50286692/changing-a-small-amount-of-text-in-a-textarea-to-bold
function changeStyle(style) {
    var sel = window.getSelection(); // Gets selection
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

var removeUploadedImage = function(outputId) {
    var result = window.confirm("Are you sure you want to remove your uploaded image?");
    if (result) {
        var image = document.getElementById(outputId);
        image.src = "";
        image.classList.remove('uploadedImage');

        let index = outputId.charAt(outputId.length - 1);
        uploadedImages[index] = undefined;
    }
};

var loadPerkIcon = function(event) {
    var image = document.getElementById('output');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 0);
};

var loadPerk1Icon = function(event) {
    var image = document.getElementById('output1');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 1);
};

var loadPerk2Icon = function(event) {
    var image = document.getElementById('output2');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 2);
};

var loadPerk3Icon = function(event) {
    var image = document.getElementById('output3');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 3);
};

var killerPowerIcon = function(event) {
    var image = document.getElementById('output4');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 4);
};

var fullKillerPowerIcon = function(event) {
    var image = document.getElementById('output5');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 5);
};

var fullKillerPerk1Icon = function(event) {
    var image = document.getElementById('output6');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 6);
};

var fullKillerPerk2Icon = function(event) {
    var image = document.getElementById('output7');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 7);
};

var fullKillerPerk3Icon = function(event) {
    var image = document.getElementById('output8');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 8);
};

var createAddonIcon = function(event) {
    var image = document.getElementById('output9');
    image.src=URL.createObjectURL(event.target.files[0]);
    image.classList.add('uploadedImage');

    pushImageToArray(event.target.files[0], 9);
}

function pushImageToArray(file, index) {
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            uploadedImages[index] = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}

//for changing perk background
function changePerkBackground(item) {
    console.log("item: " + item);
    var createPerkBackground = document.getElementsByClassName("perkTitle");
    var createPerkIconBackground = document.getElementsByClassName("perkIcons");

    for (var i = 0; i < createPerkBackground.length; i++) {
        if (item == 0) {
            createPerkBackground[i].style.backgroundImage = "url('images/orangeperkbackgroundteachable.png')";
            createPerkIconBackground[i].src = "images/teachablePerk.png";
        } else if (item == 1) {
            createPerkBackground[i].style.backgroundImage = "url('images/backgroundVeryRarePerk.png')";
            createPerkIconBackground[i].src = "images/very rare.png";
        } else {
            console.log("Something went wrong.");
        }
    }
}

//for changing addon background
function changeAddonBackground(item) {

    var createAddonBackground = document.getElementById("createAddonTitle");
    var createAddonIconBackground = document.getElementById("createAddonIcon");
    if (item == 0) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Addons/backgroundCommonAddonText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/commonAddon.png";
    } else if (item == 1) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Addons/backgroundUncommonAddonText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/uncommonAddon.png";
    } else if (item == 2) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Addons/backgroundRareAddonText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/rareAddon.png";
    } else if (item == 3) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Addons/backgroundVeryRareAddonText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/veryRareAddon.png";
    } else if (item == 4) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Addons/backgroundIridescentAddonText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/iridescentAddon.png";
    } else if (item == 5) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Addons/backgroundEventAddonText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/eventAddon.png";
    } else {
        console.log("Something went wrong.");
    }
}

function changeItemBackground(item) {
    
    var createAddonBackground = document.getElementById("createAddonTitle");
    var createAddonIconBackground = document.getElementById("createAddonIcon");
    if (item == 0) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Items/backgroundCommonItemText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/commonAddon.png";
    } else if (item == 1) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Items/backgroundUncommonItemText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/uncommonAddon.png";
    } else if (item == 2) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Items/backgroundRareItemText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/rareAddon.png";
    } else if (item == 3) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Items/backgroundVeryRareItemText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/veryRareAddon.png";
    } else if (item == 4) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Items/backgroundIridescentItemText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/iridescentAddon.png";
    } else if (item == 5) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Items/backgroundEventItemText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/eventAddon.png";
    } else if (item == 6) {
        createAddonBackground.style.backgroundImage = "url('images/blankTemplates/Items/backgroundLimitedItemText.png')";
        createAddonIconBackground.src = "images/blankTemplates/Addons/limitedItem.png";
    }
    else {
        console.log("Something went wrong.");
    }
}

function swapAddonItemTab() {
    var toSwap = document.getElementById("swapAddonItemButton");
    var itemDropdown = document.getElementById("backgroundItemDropdown");
    var addonDropdown = document.getElementById("backgroundAddonDropdown");
    
    if (toSwap.innerHTML == "To Item") {
        itemDropdown.style.display = "inline-block";
        addonDropdown.style.display = "none";
        toSwap.innerHTML = "To Addon";
        changeItemBackground(itemDropdown.value);
    }
    else {
        itemDropdown.style.display = "none";
        addonDropdown.style.display = "inline-block";
        toSwap.innerHTML = "To Item";
        changeAddonBackground(addonDropdown.value);
    }
}

function swapAddonItemTabProfile(swapTo) {
    var toSwap = document.getElementById("swapAddonItemButton");
    var itemDropdown = document.getElementById("backgroundItemDropdown");
    var addonDropdown = document.getElementById("backgroundAddonDropdown");
    
    if (swapTo == "Addon") {
        itemDropdown.style.display = "none";
        addonDropdown.style.display = "inline-block";
        toSwap.innerHTML = "To Item";
        changeAddonBackground(addonDropdown.value);
    }
    else {
        itemDropdown.style.display = "inline-block";
        addonDropdown.style.display = "none";
        toSwap.innerHTML = "To Addon";
        changeItemBackground(itemDropdown.value);
    }
}

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

//first time load popup
var firstTimePopup = document.getElementById("firstTimePopup");
var span = document.getElementById("closeFirstTime");
var span2 = document.getElementById("closeFirstTime2");

function handleFirstTimeClose() {
    firstTimePopup.style.display = "none";
    firstTimeVisit = false;
    saveProfileConcepts();
}

span.addEventListener('click', handleFirstTimeClose);
span2.addEventListener('click', handleFirstTimeClose);

window.onclick = function(event) {
    if (event.target == popupContainer) {
        firstTimePopup.style.display = "none";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        firstTimePopup.style.display = "none";
        firstTimeVisit = false;
        saveProfileConcepts();
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

/* Left align descriptions on skip line */

document.querySelectorAll('.perkDescription, .loreDescription').forEach(function(div) {
    div.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.execCommand('insertLineBreak');
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                range.collapse(false);
            }
        }
    });
});

/* Left align descriptions on skip line */

/* Profile Stuff */

function confirmConceptName() {
    let doesTitleExist = false;
    let currentConceptPage = getCurrentPage();
    
    if (currentConceptPage != "Home" && currentConceptPage != "iconEditor" && currentConceptPage != "faq" && currentConceptPage != "profile") {
        let title = prompt("Type the name of your concept.");
        if (title != null) {
            for (let i = 0; i < savedConcepts.length; i++) {
                let boolForAddonItem = false;
                if (savedConcepts[i].type.slice(0, -1) == "Addon" || savedConcepts[i].type.slice(0, -1) == "Item") {
                    boolForAddonItem = true;
                }
                
                if (savedConcepts[i].name == title && (savedConcepts[i].type == currentConceptPage || boolForAddonItem)) {
                    doesTitleExist = true;

                    let text = "A concept with the same name already exists, proceeding will overwrite the existing concept.";
                    if (confirm(text)) {
                        savedConcepts.splice(i, 1);
                        alert("You overwrited the concept \'" + title + "\'.");
                        addConceptToProfile(title);
                    }
                    else {
                        alert("You cancelled the saving of the concept.")
                    }
                    return;
                }
            }
            if (!doesTitleExist) {
                addConceptToProfile(title);
            }
        }
        else {
            alert("Cancelled concept save.");
        }
    }
    else {
        alert("You cannot save a concept on this page.")
    }
}

function addConceptToProfile(savedName) {
    let page = getCurrentPage();

    // let today = new Date();
    // let todayDate = today.toISOString().slice(0, 10);
    
    let today = new Date();

    // Get the date in yyyy-mm-dd format
    let todayDateOnly = today.toISOString().slice(0, 10);

    // Get the time in EST
    let options = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    let formatter = new Intl.DateTimeFormat('en-US', options);
    let timeParts = formatter.formatToParts(today);

    // Extract the hour, minute, and second
    let hour = timeParts.find(part => part.type === 'hour').value;
    let minute = timeParts.find(part => part.type === 'minute').value;
    let second = timeParts.find(part => part.type === 'second').value;

    // Concatenate date and time
    let todayDate = `${todayDateOnly} ${hour}:${minute}:${second}`;

    let dataStored = [];
    let editableTitleDivs;
    let editableDescriptionDivs;
    let outputId = [];

    if (page == "One Perk") {
        editableTitleDivs = document.querySelectorAll('.onePerkTitle');
        editableDescriptionDivs = document.querySelectorAll('.onePerkDescription');
        outputId.push(document.getElementById("output"));
        
    } else if (page == "Three Perks") {
        editableTitleDivs = document.querySelectorAll('.threePerksTitle');
        editableDescriptionDivs = document.querySelectorAll('.threePerksDescription');
        outputId.push(document.getElementById("output1"));
        outputId.push(document.getElementById("output2"));
        outputId.push(document.getElementById("output3"));

    } else if (page == "Killer Power") {
        editableTitleDivs = document.querySelectorAll('.killerPowerTitle');
        editableDescriptionDivs = document.querySelectorAll('.killerPowerDescription');
        outputId.push(document.getElementById("output4"));

    } else if (page == "Full Killer") {
        editableTitleDivs = document.querySelectorAll('.fullKillerTitle');
        editableDescriptionDivs = document.querySelectorAll('.fullKillerDescription');
        outputId.push(document.getElementById("output5"));
        outputId.push(document.getElementById("output6"));
        outputId.push(document.getElementById("output7"));
        outputId.push(document.getElementById("output8"));

    } else if (page == "Addon/Item") {
        editableTitleDivs = document.querySelectorAll('.createAddonTitle');
        editableDescriptionDivs = document.querySelectorAll('.createAddonDescription');
        outputId.push(document.getElementById("output9"));

    } else if (page == "Lore") {
        editableTitleDivs = document.querySelectorAll('.loreTitle');
        editableDescriptionDivs = document.querySelectorAll('.loreDescription');
    }

    editableTitleDivs.forEach((titleDiv, index) => {
        const titleText = titleDiv.innerHTML.trim().toUpperCase();
        const descriptionText = editableDescriptionDivs[index].innerHTML.trim();
        let imageSrc;

        if (page != "Lore") {
            let elementId = outputId[index].id;
            let lastChar = elementId.charAt(elementId.length - 1);
            if (lastChar == "t") {
                lastChar = "0";
            }
            let newIndex = parseInt(lastChar);
            imageSrc = uploadedImages[newIndex];
        }
        else {
            imageSrc = "";
        }
        // console.log(`Title ${index + 1}: ${titleText}`);
        // console.log(`Description ${index + 1}: ${descriptionText}`);

        dataStored.push({ titleText, descriptionText, imageSrc });
    });

    // console.log("data: " + JSON.stringify(dataStored));

    let addonOrItem;
    let rarity;

    if (page == "Addon/Item") {
        let button = document.getElementById("swapAddonItemButton");
        addonOrItem = (button.textContent == "To Item") ? "Addon" : "Item";
        rarity = (addonOrItem == "Addon") ? document.getElementById("backgroundAddonDropdown").value : document.getElementById("backgroundItemDropdown").value;
        addonOrItem += rarity;
        page = addonOrItem;
    }
    
    let newConcept = {
        name: savedName,
        type: page,
        dateCreated: todayDate,
        data: dataStored
    };

    savedConcepts.push(newConcept);

    loadProfile();

    saveProfileConcepts();

    // console.log("Test: " + JSON.stringify(savedConcepts[0].data[0].titleText));
}

function loadConcept(index) {
    let text = "Loading this concept will remove any concepts currently being worked on on that page. Do you wish to proceed?";
    if (confirm(text)) {
        let concept = savedConcepts[index];
        let addonOrItem;
        let rarity;
        let fullConceptType = concept.type;

        // Have to do the slice to remove last character as it represents the rarity (is a number)
        let slicedConcept = concept.type.slice(0, -1);

        if (slicedConcept == "Addon" || slicedConcept == "Item") {
            rarity = fullConceptType.charAt(fullConceptType.length - 1);
        
            addonOrItem = (slicedConcept == "Addon") ? "Addon" : "Item";

            document.getElementById("background" + addonOrItem + "Dropdown").value = rarity;
            swapAddonItemTabProfile(slicedConcept);

            concept.type = "Addon/Item";
        }

        let pageIndex = listOfPages.indexOf(concept.type);
        switchPage(0);
        switchPage(pageIndex);

        // We do this after switching page because switching will default to showing the addon dropdown -> dont need it after fixing switchpage()
        // if (concept.type == "Addon/Item") {
        //     swapAddonItemTabProfile(slicedConcept);
        // }

        let editableTitleDivs;
        let editableDescriptionDivs;
        let outputId = [];
        let baseIndex;  // This variable is used when loading concepts, to save the images from the loaded concepts to the uploadedImages array so they can get saved if a new concept is saved

        if (concept.type == "One Perk") {
            editableTitleDivs = document.querySelectorAll('.onePerkTitle');
            editableDescriptionDivs = document.querySelectorAll('.onePerkDescription');
            outputId.push(document.getElementById("output"));
            baseIndex = 0;
            
        } else if (concept.type == "Three Perks") {
            editableTitleDivs = document.querySelectorAll('.threePerksTitle');
            editableDescriptionDivs = document.querySelectorAll('.threePerksDescription');
            outputId.push(document.getElementById("output1"));
            outputId.push(document.getElementById("output2"));
            outputId.push(document.getElementById("output3"));
            baseIndex = 1;

        } else if (concept.type == "Killer Power") {
            editableTitleDivs = document.querySelectorAll('.killerPowerTitle');
            editableDescriptionDivs = document.querySelectorAll('.killerPowerDescription');
            outputId.push(document.getElementById("output4"));
            baseIndex = 4;

        } else if (concept.type == "Full Killer") {
            editableTitleDivs = document.querySelectorAll('.fullKillerTitle');
            editableDescriptionDivs = document.querySelectorAll('.fullKillerDescription');
            outputId.push(document.getElementById("output5"));
            outputId.push(document.getElementById("output6"));
            outputId.push(document.getElementById("output7"));
            outputId.push(document.getElementById("output8"));
            baseIndex = 5;

        } else if (concept.type == "Addon/Item") {
            editableTitleDivs = document.querySelectorAll('.createAddonTitle');
            editableDescriptionDivs = document.querySelectorAll('.createAddonDescription');
            outputId.push(document.getElementById("output9"));
            baseIndex = 9;

        } else if (concept.type == "Lore") {
            editableTitleDivs = document.querySelectorAll('.loreTitle');
            editableDescriptionDivs = document.querySelectorAll('.loreDescription');
        }

        editableTitleDivs.forEach((titleDiv, index) => {
            titleDiv.innerHTML = concept.data[index].titleText;
            editableDescriptionDivs[index].innerHTML = concept.data[index].descriptionText;
            
            if (concept.type != "Lore") {
                let conceptImageSrc = concept.data[index].imageSrc
                outputId[index].src = conceptImageSrc;

                // We must push the images from the loaded concept to the uploadedImages array so that if a new concept gets saved, the images get saved with it
                uploadedImages[index+baseIndex] = conceptImageSrc;

                // TODO - small bug where loading a concept with no image will show a no image icon (but it doesn't show up in image save)

                // let elementId = outputId[index].id;
                // let lastChar = elementId.charAt(elementId.length - 1);
                // console.log("load: " + elementId + " " + lastChar);
                // if (lastChar == "t") {
                //     lastChar = "0";
                // }
                // let newIndex = parseInt(lastChar);
                // outputId[index].src = concept.data[newIndex].imageSrc; // TODO - second index cant be just index cause thats for outputId.push, gotta do the index from uploadedImages
            }
        });

    }
    else {
        alert("You cancelled.")
    }
}

function confirmShare(event, index) {
    event.stopPropagation();
    copyConceptCode(index);
}

function confirmDelete(event, index) {
    event.stopPropagation();
    if (confirm("Are you sure you want to delete this?")) {
        event.target.closest('.profileItem').remove();
        savedConcepts.splice(index, 1);
    }

    saveProfileConcepts();
    loadProfile();
}

function loadProfile() {
    const profileList = document.querySelector('.profileList');

    profileList.innerHTML = "";

    // Reverse array to display most recent first
    const reversedConcepts = savedConcepts.slice().reverse();

    if (reversedConcepts.length > 0) {
        reversedConcepts.forEach((concept, index) => {
            const originalIndex = savedConcepts.length - index - 1;
            const listItem = document.createElement('li');
            listItem.className = 'profileItem';
            listItem.setAttribute('onclick', `loadConcept(${originalIndex})`);
            
            let typeOfConcept = concept.type;
            let conceptRarity;

            if (typeOfConcept.slice(0, -1) == "Addon" || typeOfConcept.slice(0, -1) == "Item") {
                conceptRarity = parseInt(typeOfConcept.charAt(typeOfConcept.length - 1));
                typeOfConcept = typeOfConcept.slice(0, -1);
                switch (conceptRarity) {
                    case 0:
                        typeOfConcept = "Uncommon " + typeOfConcept;
                        break;
                    case 1:
                        typeOfConcept = "Common " + typeOfConcept;
                        break;
                    case 2:
                        typeOfConcept = "Rare " + typeOfConcept;
                        break;
                    case 3:
                        typeOfConcept = "Very Rare " + typeOfConcept;
                        break;
                    case 4:
                        typeOfConcept = "Ultra Rare " + typeOfConcept;
                        break;
                    case 5:
                        typeOfConcept = "Event " + typeOfConcept;
                        break;
                    case 6:
                        typeOfConcept = "Limited " + typeOfConcept;
                        break;
                }
            }

            listItem.innerHTML = `
                ${concept.name + " - " + typeOfConcept}
                <div class="buttonGroupProfile">
                    <span>Created on ${concept.dateCreated}</span>
                    <button class="share-button" onclick="confirmShare(event, ${originalIndex})">
                        <img src="images/shareIcon.png" alt="Share">
                    </button>
                    <button class="trash-button" onclick="confirmDelete(event, ${originalIndex})">
                        <img src="images/trashIcon.png" alt="Trash">
                    </button>
                </div>
            `;
            profileList.appendChild(listItem);
        });
    }
    else {
        const listItem = document.createElement('li');
        listItem.className = 'profileItem';
        listItem.innerHTML = `
            No saved concepts.
        `;
        profileList.appendChild(listItem);
    }
}

document.addEventListener('DOMContentLoaded', loadProfile);

function logConcepts() {
    console.log(JSON.stringify(savedConcepts));
}

function showAboutProfile() {
    document.getElementById("firstTimePopup").style.display = "flex";
}
/* Profile Stuff */

/* Copy */

function copyConceptCode(index) {

    let conceptInfo = JSON.stringify(savedConcepts[index]);

    navigator.clipboard.writeText(conceptInfo)
        .then(() => {
            alert("Concept has been copied");
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
            alert('Failed to copy the concept.');
        });
}

/* Copy */

/* Import Concept */

function importConcept() {
    let concept = prompt("Paste your concept code.");
    parsedConcept = JSON.parse(concept);

    if (parsedConcept != null) {
        if (isValidConcept(parsedConcept)) {
            savedConcepts.push(parsedConcept);
            saveProfileConcepts();
            loadProfile();
        }
        else {
            alert("Invalid concept format.");
        }
    }
}

const exportDelimeter = '|~'

function exportAllConcepts() {
    let exportString = "";
    for (i = 0; i < savedConcepts.length; i++) {
        exportString += JSON.stringify(savedConcepts[i]) + exportDelimeter;
    }

    // -2 for the delimeter length
    exportString = exportString.slice(0, -2);

    navigator.clipboard.writeText(exportString)
        .then(() => {
            alert("Concept has been copied");
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
            alert('Failed to copy the concept.');
        });
}

function importAllConcepts() {
    let concept = prompt("Paste your concept code.");

    let retrievedConcepts = concept.split(exportDelimeter).map(item => JSON.parse(item));

    for (i = 0; i < retrievedConcepts.length; i++) {
        
        let parsedConcept = retrievedConcepts[i];

        if (parsedConcept != null) {
            if (isValidConcept(parsedConcept)) {
                savedConcepts.push(parsedConcept);
                saveProfileConcepts();
                loadProfile();
            }
            else {
                alert("Invalid concept format.");
            }
        }
    }
}

function isValidConcept(concept) {
    const expectedKeys = ['name', 'type', 'dateCreated', 'data'];

    for (let key of expectedKeys) {
        if (!(key in concept)) {
            return false;
        }
    }

    if (!Array.isArray(concept.data)) {
        return false;
    }

    return true;
}

/* Import Concept */

/* Spider click */
function removeSpider(element) {
    const currentTop = element.getBoundingClientRect().top; // Distance from the top of the viewport
    const elementHeight = element.offsetHeight; // Height of the element

    // Set the ending position to the bottom of the screen
    const endPosition = window.innerHeight - elementHeight - 150;
    console.log(endPosition);

    const randomMin = 720;
    const randomMax = 1440;

    // Generate a random rotation angle between 90 and 720 degrees
    const randomAngle = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;

    // Randomize the direction (1 for clockwise, -1 for counterclockwise)
    const direction = Math.random() < 0.5 ? 1 : -1;

    // Calculate the final rotation value
    const finalRotation = direction * randomAngle;

    // Create a keyframe animation dynamically
    const animation = element.animate([
        { top: `${currentTop}px`, transform: `rotate(0deg)` },
        { top: `${endPosition}px`, transform: `rotate(${finalRotation}deg)` }
    ], {
        duration: 2000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    // Apply styles to the element after animation
    animation.onfinish = () => {
        element.style.top = `${endPosition}px`;
        element.style.transform = `rotate(${finalRotation}deg)`;
        element.remove();
    };
    //element.remove();
}
/* Spider click */

/* Loading Logo */
window.onload = function() {
    // Hide the loading screen
    document.getElementById('loading-screen').style.display = 'none';
};
/* Loading Logo */