/* For Canvas */

var canvas = new fabric.Canvas('iconCanvas');

/* For Canvas */

/* For images */

var folderName = "images/gameIcons/IconList/";
var imageArray = [];
console.log(folderName);
const xhr = new XMLHttpRequest();
xhr.open('GET', folderName);
xhr.onload = function() {
    const parser = new DOMParser();
    const html = parser.parseFromString(xhr.responseText, 'text/html');
    const links = html.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const href = link.getAttribute('href');
        if (href && !href.startsWith('?')) {
            const fileName = decodeURIComponent(href.split('/').pop());
            imageArray.push(fileName);
            //console.log(fileName);
        }
    }
    imageArray.shift();
    imageArray.pop();
    for (i=0; i<imageArray.length; i++) {
        console.log(i + " " + imageArray[i]);
    }
    //console.log("array: " + imageArray);

    loadImagesForCanvas();
};
xhr.send();

// var imageArray = [
//     "iconPerks_saboteur.png", "iconPerks_selfCare.png", "iconPerks_shadowborn.png", "iconPerks_slipperyMeat.png",
//     "iconAddon_babyTeeth.png", "iconAddon_bloodiedBlackHood.png", "iconAddon_catFigurine.png", "iconAddon_dropOfPerfume.png", "iconAddon_forestStew.png",
//     "iconPowers_bubbasChainsaw.png", "iconPowers_Tantrum.png",
//     "iconFavors_azarovsKey.png", "iconFavors_blackSaltStatuette.png",
//     "iconStatusEffects_bleeding.png", "iconStatusEffects_blessed.png"
// ];
// var folderName = "images/gameIcons/testIcons/";
var imageArrayTitle = [];

const div = document.getElementById("iconDiv"); // Replace "myDiv" with the ID of your HTML div element

function loadImagesForCanvas() {
    for (i = 0; i < imageArray.length; i++) {
        //console.log("adding image " + imageArray[i]);
        const img = document.createElement("img");
        img.alt = imageArray[i];
        img.src = folderName + imageArray[i];
        var title = imageArray[i].replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
        title = title.slice(title.indexOf("_") + 1, -4);
        img.title = title;
        img.classList.add("iconDisplayedInDiv");
        img.addEventListener("click", function() {
            addIconToCanvas(this.alt);
        })
        div.appendChild(img);

        imageArrayTitle.push(title);
        //create another array to hold title
    }
}

function addIconToCanvas(iconName) {
    console.log(imageArray);
    console.log("Clicked icon:", iconName);

    var imageSRC = folderName + iconName;
    fabric.Image.fromURL(imageSRC, function(img) {
        img.scaleToWidth(400);
        img.scaleToHeight(400);
        canvas.add(img);
    });
}

function sendIconBack() {
    var object = canvas.getActiveObject();
    canvas.sendBackwards(object);
}

function sendIconForward() {
    var object = canvas.getActiveObject();
    canvas.bringForward(object);
}

function deleteIconFunction() {
    var object = canvas.getActiveObject();
    if (!object){
        alert('Please select an element to remove.');
        return '';
    }
    canvas.remove(object);
}

/* For Images */

/* For Drawing */
var toggleDrawingButton = document.getElementById("toggleDrawing");
var drawingOptionsDisplay = document.getElementById("drawingButtons");
var drawingLineWidthSlider = document.getElementById("drawingLineWidth");
var drawingColorInput = document.getElementById("drawingColor");

canvas.isDrawingMode = false;
drawingButtons.style.display = 'none';
canvas.freeDrawingBrush.width = 15;

toggleDrawingButton.addEventListener("click", function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
        toggleDrawingButton.style.backgroundColor = "rgb(110, 63, 9)";
        toggleDrawingButton.innerHTML = 'Turn Off Drawing';
        drawingButtons.style.display = '';
    }
    else {
        toggleDrawingButton.style.backgroundColor = "rgb(170, 100, 19)";
        toggleDrawingButton.innerHTML = 'Turn On Drawing';
        drawingButtons.style.display = 'none';
    }
});

function changeSliderByOne(value) {
    if ((canvas.freeDrawingBrush.width == 1 && value == -1) || (canvas.freeDrawingBrush.width == 150 && value == 1)) {
        return;
    }
    else {
        canvas.freeDrawingBrush.width += value;
        document.getElementById("lineWidthDisplay").innerHTML = canvas.freeDrawingBrush.width;
        drawingLineWidthSlider.value = canvas.freeDrawingBrush.width;
    }
}

drawingLineWidthSlider.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
    document.getElementById("lineWidthDisplay").innerHTML = this.value;
};

drawingColorInput.onchange = function() {
    var brush = canvas.freeDrawingBrush;
    brush.color = this.value;
    if (brush.getPatternSrc) {
        brush.source = brush.getPatternSrc.call(brush);
    }
};

//search bar
function searchThroughIcons() {
    const input = document.getElementById("search");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("iconDiv");
    div.innerHTML = "";

    for (let i = 0; i < imageArray.length; i++) {
        const alt = imageArrayTitle[i].split(".")[0];
        for (j = 0; j < filterOptions.length; j++) {
            if (imageArray[i].slice(0, imageArray[i].indexOf("_")) == filterOptions[j].title && filterOptions[j].isChecked == "true") {
                if (alt.toUpperCase().includes(filter)) {
                    const img = document.createElement("img");
                    img.alt = imageArray[i];
                    img.src = folderName + imageArray[i];
                    var title = imageArray[i].replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
                    title = title.slice(title.indexOf("_") + 1, -4);
                    img.title = title;
                    img.classList.add("iconDisplayedInDiv");
                    img.addEventListener("click", function() {
                        addIconToCanvas(this.alt);
                    })
                    div.appendChild(img);
                }
            }
        }
    }
}

// Filter Buttons Functinality

const filterOptions = [
    {title: "iconPerks", name: "Perks", isChecked: "true"},
    {title: "iconAddon", name: "Addons", isChecked: "true"},
    {title: "iconPowers", name: "Powers", isChecked: "true"},
    {title: "iconFavors", name: "Offerings", isChecked: "true"}, 
    {title: "iconStatusEffects", name: "Status", isChecked: "true"}
];
const checkboxes = document.querySelectorAll(".filterButton");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        //update search results when checking
        document.getElementById("search").value = "";
        searchThroughIcons();
        //if we check
        if (this.checked) {
            for (i = 0; i < filterOptions.length; i ++) {
                if (filterOptions[i].title == checkbox.value) {
                    filterOptions[i].isChecked = "true";
                }
            }
            div.innerHTML = "";

            for (i = 0; i < imageArray.length; i++) {
                //check if the beginning of the name of the image is different than checkbox value AND that the filteroptions of that name is true
                console.log("AAA" + filterOptions[filterOptions.findIndex(option => option.title === imageArray[i].slice(0, imageArray[i].indexOf("_")))].title);
                if (filterOptions[filterOptions.findIndex(option => option.title === imageArray[i].slice(0, imageArray[i].indexOf("_")))].isChecked == "true") {
                    const img = document.createElement("img");
                    img.alt = imageArray[i];
                    img.src = folderName + imageArray[i];
                    var title = imageArray[i].replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
                    title = title.slice(title.indexOf("_") + 1, -4);
                    img.title = title;
                    img.classList.add("iconDisplayedInDiv");
                    img.addEventListener("click", function() {
                        addIconToCanvas(this.alt);
                    })
                    div.appendChild(img);
                }
            }
            console.log(`${this.name} is checked`);
        } 
        //if we uncheck
        else {
            for (i = 0; i < filterOptions.length; i ++) {
                if (filterOptions[i].title == checkbox.value) {
                    filterOptions[i].isChecked = "false";
                }
            }
            div.innerHTML = "";

            for (i = 0; i < imageArray.length; i++) {
                //check if the beginning of the name of the image is different than checkbox value AND that the filteroptions of that name is true
                if (imageArray[i].slice(0, imageArray[i].indexOf("_")) != checkbox.value && filterOptions[filterOptions.findIndex(option => option.title === imageArray[i].slice(0, imageArray[i].indexOf("_")))].isChecked == "true") {
                    console.log("is it checked " + filterOptions[0].isChecked);
                    const img = document.createElement("img");
                    img.alt = imageArray[i];
                    img.src = folderName + imageArray[i];
                    var title = imageArray[i].replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
                    title = title.slice(title.indexOf("_") + 1, -4);
                    img.title = title;
                    img.classList.add("iconDisplayedInDiv");
                    img.addEventListener("click", function() {
                        addIconToCanvas(this.alt);
                    })
                    div.appendChild(img);
                }
            }
            console.log(`${this.name} is not checked`);
        }
    });
});


/* For Drawing */