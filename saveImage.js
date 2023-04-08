var divId = ["onePerk", "threePerks", "killerPower", "fullKiller", "lore"];

//const srcElement = document.querySelector("#threePerks");
btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        for (i = 0; i < divId.length; i++) {
            if (document.getElementById(divId[i]).style.display == "block") {
                const srcElement = document.querySelector("#" + divId[i]);
                html2canvas(srcElement).then((canvas) => {
                    if (btn.id === "saveImageButton") {
                        const newTab = window.open();
                        const newDoc = newTab.document;
                        newDoc.write('<html><body></body></html>'); // Create a new document
                        newDoc.body.appendChild(canvas); // Append the canvas to the body of the new document
                        newDoc.close(); // Close the document after adding the canvas
                    }
                });
            }
        }
    });
});