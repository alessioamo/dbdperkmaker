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
                            
                            newDoc.write(`
                                <html>
                                    <body>
                                        <h1 style="text-align:center;">Right Click To Save Image (or use the button)</h1>
                                        <button id="downloadImageButton" style="display:block; width: 150px; height:50px; margin:auto;">Download Image</button>
                                    </body>
                                </html>
                            `);
                            
                            newDoc.body.appendChild(canvas);
                            newDoc.close();

                            newDoc.getElementById("downloadImageButton").addEventListener("click", () => {
                                const link = document.createElement('a');
                                link.href = canvas.toDataURL("image/png");
                                link.download = 'image.png';
                                link.click();
                            });
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

                            newDoc.write(`
                                <html>
                                    <body>
                                        <h1 style="text-align:center;">Right Click To Save Image (or use the button)</h1>
                                        <button id="downloadImageButton" style="display:block; width: 150px; height:50px; margin:auto;">Download Image</button>
                                    </body>
                                </html>
                            `);
                            
                            newDoc.body.appendChild(canvas);
                            newDoc.close();

                            newDoc.getElementById("downloadImageButton").addEventListener("click", () => {
                                const link = document.createElement('a');
                                link.href = canvas.toDataURL("image/png");
                                link.download = 'image.png';
                                link.click();
                            });
                        }
                    });
                }
            }
        }
    });
});