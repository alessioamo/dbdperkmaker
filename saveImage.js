var divId = ["onePerk", "threePerks", "killerPower", "fullKiller", "createAddon", "lore", "iconEditor"];

btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        for (i = 0; i < divId.length; i++) {
            if (document.getElementById(divId[i]).style.display == "block") {
                if (divId[i] == "iconEditor") {
                    const srcElement = document.querySelector("#iconCanvas");
                    html2canvas(srcElement).then((canvas) => {
                        if (btn.id === "saveImageButton") {
                            console.log("SAVING");
                            const newTab = window.open();
                            const newDoc = newTab.document;
                            newDoc.write('<html><body></body></html>'); // Create a new document
                            newDoc.body.appendChild(canvas); // Append the canvas to the body of the new document
                            newDoc.close(); // Close the document after adding the canvas
                        }
                    });
                }
                else {
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
        }
    });
});