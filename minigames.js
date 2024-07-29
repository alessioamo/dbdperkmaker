function switchMinigame(i) {
    document.getElementById("selectionButtonsDiv").style.display = "none";
    switch (i) {
        case 0:
            document.getElementById("selectionButtonsDiv").style.display = "block";
            document.getElementById("skillcheck").style.display = "none";
            document.getElementById("trivia").style.display = "none";
            document.getElementById("matching").style.display = "none";
            document.getElementById("homeStuff").style.display = "none";
            document.getElementById("body").style.paddingTop = "7%";
            break;
        case 1:
            document.getElementById("selectionButtonsDiv").style.display = "block";
            document.getElementById("skillcheck").style.display = "none";
            document.getElementById("trivia").style.display = "none";
            document.getElementById("matching").style.display = "none";
            document.getElementById("body").style.paddingTop = "7%";
            window.location.href = 'index.html';
            break;
        case 2:
            document.getElementById("skillcheck").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            break;
        case 3:
            document.getElementById("trivia").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            break;
        case 4:
            document.getElementById("matching").style.display = "block";
            document.getElementById("body").style.paddingTop = "3%";
            break;
    }

    // currentPage = listOfPages[i];

    if (i != 0 && i != 1) {
        document.getElementById("homeStuff").style.display = "block";
    }
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