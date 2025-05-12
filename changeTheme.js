const specialEffectsArray = ['hangingLights', 'flyingBalloons', 'hangingSpiders'];

const themes = {
    default: {
        // global: {
        //     fontFamily: 'Roboto',
        //     textAlign: 'center'
        // },
        title: {
            color: 'red',
            textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black',
            fontFamily: 'inherit',
            fontSize: '32px',
            letterSpacing: 'inherit',
        },
        welcomeMessageVersion: {
            color: 'red'
        },
        iconPopupClick: {
            color: 'red'
        },
        faqTitle: {
            color: 'red'
        },
        homeButton: {
            textAlign: 'center',
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(170, 19, 137)',
            width: '100px',
            height: '40px',
            borderRadius: '20%',
            hoverColor: 'rgb(180, 100, 163)'
        },
        blackBackgroundCheckButton: {
            checkedColor: 'rgb(122, 58, 108)',
            uncheckedColor: 'rgb(170, 19, 137)'
        },
        body: {
            backgroundImage: "url('./images/background2.jpg')"
        },
        selectionButtons: {
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(170, 19, 137)',
            width: '100px',
            height: '40px',
            border: '2px solid rgb(0, 0, 0)',
            borderRadius: '20%',
            cursor: 'pointer',
            hoverColor: 'rgb(180, 100, 163)'
        },
        specialEffects: {
            id: ''
        }
    },
    christmas: {
        title: {
            color: 'red',
            textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black',
            fontFamily: 'ChristmasFont2',
            fontSize: '60px',
            letterSpacing: '4px'
        },
        welcomeMessageVersion: {
            color: 'red'
        },
        iconPopupClick: {
            color: 'red'
        },
        faqTitle: {
            color: 'red'
        },
        homeButton: {
            textAlign: 'center',
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(19, 170, 32)',
            width: '100px',
            height: '40px',
            borderRadius: '20%',
            hoverColor: 'rgb(226, 0, 0)'
        },
        blackBackgroundCheckButton: {
            checkedColor: 'rgb(226, 0, 0)',
            uncheckedColor: 'rgb(19, 170, 32)'
        },
        body: {
            backgroundImage: "url('./images/christmasBackground2.png')"
        },
        selectionButtons: {
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(19, 170, 32)',
            width: '100px',
            height: '40px',
            border: '2px solid rgb(0, 0, 0)',
            borderRadius: '20%',
            cursor: 'pointer',
            hoverColor: 'rgb(226, 0, 0)'
        },
        specialEffects: {
            id: 'hangingLights'
        }
    },
    birthday: {
        title: {
            color: 'red',
            textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black',
            fontFamily: 'inherit',
            fontSize: '32px',
            letterSpacing: 'inherit',
        },
        welcomeMessageVersion: {
            color: 'red'
        },
        iconPopupClick: {
            color: 'red'
        },
        faqTitle: {
            color: 'red'
        },
        homeButton: {
            textAlign: 'center',
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(170, 19, 137)',
            width: '100px',
            height: '40px',
            borderRadius: '20%',
            hoverColor: 'rgb(180, 100, 163)'
        },
        blackBackgroundCheckButton: {
            checkedColor: 'rgb(122, 58, 108)',
            uncheckedColor: 'rgb(170, 19, 137)'
        },
        body: {
            backgroundImage: getRandomBirthdayBackground()
        },
        selectionButtons: {
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(170, 19, 137)',
            width: '100px',
            height: '40px',
            border: '2px solid rgb(0, 0, 0)',
            borderRadius: '20%',
            cursor: 'pointer',
            hoverColor: 'rgb(180, 100, 163)'
        },
        specialEffects: {
            id: 'flyingBalloons'
        }
    },
    anniversary8: {
        title: {
            color: 'rgb(134, 151, 229)',
            textShadow: '0 0 20px rgba(134, 151, 229, 0.8), 0 0 30px rgba(134, 151, 229, 0.6), 0 0 40px rgba(134, 151, 229, 0.4), 0 0 50px rgba(134, 151, 229, 0.2);',
            fontFamily: 'inherit',
            fontSize: '32px',
            letterSpacing: 'inherit',
        },
        welcomeMessageVersion: {
            color: 'rgb(134, 151, 229)'
        },
        iconPopupClick: {
            color: 'rgb(134, 151, 229)'
        },
        faqTitle: {
            color: 'rgb(134, 151, 229)'
        },
        homeButton: {
            textAlign: 'center',
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(186, 154, 92)',
            width: '100px',
            height: '40px',
            borderRadius: '20%',
            hoverColor: 'rgb(186, 132, 62)'
        },
        blackBackgroundCheckButton: {
            checkedColor: 'rgb(186, 145, 89)',
            uncheckedColor: 'rgb(186, 154, 92)'
        },
        body: {
            backgroundImage: "url('./images/anniversaryBackground.png')"
        },
        selectionButtons: {
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(186, 154, 92)',
            width: '100px',
            height: '40px',
            border: '2px solid rgb(0, 0, 0)',
            borderRadius: '20%',
            cursor: 'pointer',
            hoverColor: 'rgb(186, 132, 62)'
        },
        specialEffects: {
            id: 'flyingBalloons'
        }
    },
    halloween: {
        title: {
            color: 'red',
            textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black',
            fontFamily: 'HalloweenFont',
            fontSize: '45px',
            letterSpacing: '4px'
        },
        welcomeMessageVersion: {
            color: 'red'
        },
        iconPopupClick: {
            color: 'red'
        },
        faqTitle: {
            color: 'red'
        },
        homeButton: {
            textAlign: 'center',
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(255, 102, 0)',
            width: '100px',
            height: '40px',
            borderRadius: '20%',
            hoverColor: 'rgb(102, 0, 235)'
        },
        blackBackgroundCheckButton: {
            checkedColor: 'rgb(102, 0, 235)',
            uncheckedColor: 'rgb(255, 102, 0)'
        },
        body: {
            backgroundImage: "url('./images/halloweenBackground.jpg')"
        },
        selectionButtons: {
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(255, 102, 0)',
            width: '100px',
            height: '40px',
            border: '2px solid rgb(0, 0, 0)',
            borderRadius: '20%',
            cursor: 'pointer',
            hoverColor: 'rgb(102, 0, 235)'
        },
        specialEffects: {
            id: 'hangingSpiders'
        }
    },
    fnaf: {
        title: {
            color: 'yellow',
            textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black',
            fontFamily: 'inherit',
            fontSize: '32px',
            letterSpacing: 'inherit',
        },
        welcomeMessageVersion: {
            color: 'yellow'
        },
        iconPopupClick: {
            color: 'yellow'
        },
        faqTitle: {
            color: 'yellow'
        },
        homeButton: {
            textAlign: 'center',
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(25, 127, 185)',
            width: '100px',
            height: '40px',
            borderRadius: '20%',
            hoverColor: 'rgb(50, 180, 255)',
        },
        blackBackgroundCheckButton: {
            checkedColor: 'rgb(18, 84, 122)',
            uncheckedColor: 'rgb(25, 127, 185)'
        },
        body: {
            backgroundImage: "url('./images/fnafBackground2.png')"
        },
        selectionButtons: {
            color: 'black',
            fontSize: '15px',
            backgroundColor: 'rgb(25, 127, 185)',
            width: '100px',
            height: '40px',
            border: '2px solid rgb(0, 0, 0)',
            borderRadius: '20%',
            cursor: 'pointer',
            hoverColor: 'rgb(50, 180, 255)',
        },
        specialEffects: {
            id: ''
        }
    }
};

function getRandomBirthdayBackground() {
    const birthdayBackgrounds = [
        "./images/birthdayBackground.png",
        "./images/birthdayBackground2.png",
        "./images/birthdayBackground3.png",
        "./images/birthdayBackground4.png"
    ];
    const randomIndex = Math.floor(Math.random() * birthdayBackgrounds.length);
    return `url('${birthdayBackgrounds[randomIndex]}')`;
}

let currentTheme = 'default';

// Apply theme
function setTheme(theme) {
    document.getElementById('sidebarDropdownOptions').value = theme;
    currentTheme = theme;
    const selectedTheme = themes[theme];
    applyTheme(selectedTheme);
}
  
// Apply theme properties
function applyTheme(theme) {
    const welcomeMessage = document.getElementById('welcomeMessageTitleId');
    const welcomeMessageVersion = document.getElementById('welcomeMessageID');
    const iconPopupClick = document.getElementById('iconPopupClick');
    const faqTitle = document.getElementById('faqTitle');
    const homeButton = document.getElementById('homeButton');
    const blackBackgroundCheckButton = document.getElementById('blackBackgroundCheckButton');
    const selectionButtons = document.querySelectorAll('.selectionButtons');
    const body = document.body;
    const specialEffectId = theme.specialEffects.id;

    // Apply title styles
    welcomeMessage.style.color = theme.title.color;
    welcomeMessage.style.textShadow = theme.title.textShadow;
    welcomeMessage.style.fontFamily = theme.title.fontFamily;
    welcomeMessage.style.fontSize = theme.title.fontSize;
    welcomeMessage.style.letterSpacing = theme.title.letterSpacing;

    // Apply version styles
    welcomeMessageVersion.style.color = theme.welcomeMessageVersion.color;

    // Apply icon popup click
    iconPopupClick.style.color = theme.iconPopupClick.color;

    // Apply faq title
    faqTitle.style.color = theme.faqTitle.color;

    // Apply homeButton styles
    homeButton.style.textAlign = theme.homeButton.textAlign;
    homeButton.style.color = theme.homeButton.color;
    homeButton.style.fontSize = theme.homeButton.fontSize;
    homeButton.style.backgroundColor = theme.homeButton.backgroundColor;
    homeButton.style.width = theme.homeButton.width;
    homeButton.style.height = theme.homeButton.height;
    homeButton.style.borderRadius = theme.homeButton.borderRadius;

    // Apply blackBackgroundCheckButton styles (if defined)
    // TODO - Currently not working properly for when theme is changed and button is pressed (check color doesnt work)
    if (blackBackgroundCheckButton) {
        if (blackBackgroundCheckButton.checked) {
            blackBackgroundCheckButton.style.backgroundColor = theme.blackBackgroundCheckButton.checkedColor;
        } else {
            blackBackgroundCheckButton.style.backgroundColor = theme.blackBackgroundCheckButton.uncheckedColor;
        }
    }

    selectionButtons.forEach(button => {
        button.style.color = theme.selectionButtons.color;
        button.style.fontSize = theme.selectionButtons.fontSize;
        button.style.backgroundColor = theme.selectionButtons.backgroundColor;
        button.style.width = theme.selectionButtons.width;
        button.style.height = theme.selectionButtons.height;
        button.style.border = theme.selectionButtons.border;
        button.style.borderRadius = theme.selectionButtons.borderRadius;
        button.style.cursor = theme.selectionButtons.cursor;

        button.onmouseover = function () {
            button.style.backgroundColor = theme.selectionButtons.hoverColor;
        };
        button.onmouseout = function () {
            button.style.backgroundColor = theme.selectionButtons.backgroundColor;
        };
    });

    // Apply body styles (if defined)
    if (theme.body) {
        for (let property in theme.body) {
            body.style[property] = theme.body[property];
        }
    }

    // Apply hover effect for homeButton
    homeButton.onmouseover = function () {
        homeButton.style.backgroundColor = theme.homeButton.hoverColor;
    };
    homeButton.onmouseout = function () {
        homeButton.style.backgroundColor = theme.homeButton.backgroundColor;
    };
    
    const specialEffectElement = document.getElementById(specialEffectId);
    if (specialEffectElement) {
        specialEffectElement.style.display = 'block';
    }

    // Display remaining special effects to none
    specialEffectsArray.forEach(effect => {
        if (effect !== specialEffectId) {
            const effectElement = document.getElementById(effect);
            if (effectElement) {
                effectElement.style.display = 'none';
            }
        }
    });
}

function getCurrentTheme() {
    return currentTheme;
}

setTheme('fnaf');