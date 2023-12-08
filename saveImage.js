var divId = ["onePerk", "threePerks", "killerPower", "fullKiller", "createAddon", "lore", "iconEditor"];

btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        for (i = 0; i < divId.length; i++) {
            if (document.getElementById(divId[i]).style.display == "block") {
                if (divId[i] == "iconEditor") {
                    const srcElement = document.querySelector("#iconCanvas");
                    srcElement.style.backgroundColor = "transparent";
                    html2canvas(srcElement, {backgroundColor: null}).then((canvas) => {
                        if (btn.id === "saveImageButton") {
                            const newTab = window.open();
                            const newDoc = newTab.document;
                            newDoc.write('<html><body><h1 style="text-align:center;">Right Click To Save Image</h1></body></html>'); // Create a new document
                            newDoc.body.appendChild(canvas); // Append the canvas to the body of the new document
                            newDoc.close(); // Close the document after adding the canvas
                        }
                    });
                    srcElement.style.backgroundColor = "white";
                }
                else {
                    const srcElement = document.querySelector("#" + divId[i]);
                    html2canvas(srcElement, {backgroundColor: null}).then((canvas) => {
                        if (btn.id === "saveImageButton") {
                            const newTab = window.open();
                            const newDoc = newTab.document;
                            newDoc.write('<html><body><h1 style="text-align:center;">Right Click To Save Image</h1></body></html>'); // Create a new document
                            newDoc.body.appendChild(canvas); // Append the canvas to the body of the new document
                            newDoc.close(); // Close the document after adding the canvas
                        }
                    });
                }
            }
        }
    });
});