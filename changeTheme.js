const specialEffectsArray = ['hangingLights', 'flyingBalloons'];

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

//setTheme('default');