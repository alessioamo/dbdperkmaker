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
            document.getElementById("backgroundAddonDropdown").style.display = "inline-block";
            document.getElementById("backgroundItemDropdown").style.display = "none";
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
}

function loadProfileConcepts() {
    var concepts = JSON.parse(localStorage.getItem('savedConcepts'));
    return concepts;
}

document.addEventListener('DOMContentLoaded', function() {
    savedConcepts = loadProfileConcepts();
});

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

var removeUploadedImage = function(outputId) {
    var result = window.confirm("Are you sure you want to remove your uploaded image?");
    if (result) {
        var image = document.getElementById(outputId);
        image.src = "";
        image.classList.remove('uploadedImage');
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
    let title = prompt("Type the name of your concept.");
    if (title != null) {
        for (let i = 0; i < savedConcepts.length; i++) {
            if (savedConcepts[i].name == title && savedConcepts[i].type == currentConceptPage) {
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

function addConceptToProfile(savedName) {
    let page = getCurrentPage();

    let today = new Date();
    let todayDate = today.toISOString().slice(0, 10);

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
            console.log("test: " + elementId + " " + lastChar);
            if (lastChar == "t") {
                lastChar = "0";
            }
            let newIndex = parseInt(lastChar);
            imageSrc = uploadedImages[newIndex];
            console.log(" dd " + imageSrc);
        }
        else {
            imageSrc = "";
        }
        // console.log(`Title ${index + 1}: ${titleText}`);
        // console.log(`Description ${index + 1}: ${descriptionText}`);

        dataStored.push({ titleText, descriptionText, imageSrc });
    });

    // console.log("data: " + JSON.stringify(dataStored));
    
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

        let pageIndex = listOfPages.indexOf(concept.type);
        switchPage(0);
        switchPage(pageIndex);

        let editableTitleDivs;
        let editableDescriptionDivs;
        let outputId = [];

        if (concept.type == "One Perk") {
            editableTitleDivs = document.querySelectorAll('.onePerkTitle');
            editableDescriptionDivs = document.querySelectorAll('.onePerkDescription');
            outputId.push(document.getElementById("output"));
            
        } else if (concept.type == "Three Perks") {
            editableTitleDivs = document.querySelectorAll('.threePerksTitle');
            editableDescriptionDivs = document.querySelectorAll('.threePerksDescription');
            outputId.push(document.getElementById("output1"));
            outputId.push(document.getElementById("output2"));
            outputId.push(document.getElementById("output3"));

        } else if (concept.type == "Killer Power") {
            editableTitleDivs = document.querySelectorAll('.killerPowerTitle');
            editableDescriptionDivs = document.querySelectorAll('.killerPowerDescription');
            outputId.push(document.getElementById("output4"));

        } else if (concept.type == "Full Killer") {
            editableTitleDivs = document.querySelectorAll('.fullKillerTitle');
            editableDescriptionDivs = document.querySelectorAll('.fullKillerDescription');
            outputId.push(document.getElementById("output5"));
            outputId.push(document.getElementById("output6"));
            outputId.push(document.getElementById("output7"));
            outputId.push(document.getElementById("output8"));

        } else if (concept.type = "Addon/Item") {
            editableTitleDivs = document.querySelectorAll('.createAddonTitle');
            editableDescriptionDivs = document.querySelectorAll('.createAddonDescription');
            outputId.push(document.getElementById("output9"));

        } else if (concept.type == "Lore") {
            editableTitleDivs = document.querySelectorAll('.loreTitle');
            editableDescriptionDivs = document.querySelectorAll('.loreDescription');
        }

        editableTitleDivs.forEach((titleDiv, index) => {
            titleDiv.innerHTML = concept.data[index].titleText;
            editableDescriptionDivs[index].innerHTML = concept.data[index].descriptionText;
            
            if (concept.type != "Lore") {
                outputId[index].src = concept.data[index].imageSrc;

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
            listItem.innerHTML = `
                ${concept.name + " - " + concept.type}
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