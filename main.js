
const symbols = [
    "\"",
    "#",
    "$",
    "%",
    "&",
    "",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    "!",
    ";",
    "<",
    "=",
    ">",
    "?",
    ":",
    "@",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "[",
    "|",
    "}",
    "~",
    "{",
]


function createpassword() {
  
    let length = document.getElementById("length").value ; 
    let charactertypes = getcharactertypes ( );

    if ((length < 8) || (length > 128)){
        throw new Error("Please enter a password with 8-128 characters.")
    }


    let password = "" ;
    for (let i = 0; i < length ; i ++) {
        let charactertype = charactertypes[Math.floor( Math.random() * charactertypes.length)] 

        switch (charactertype){
            case "lowercase":
                password += String.fromCharCode(getrandomint(97,122))
                break;
            case "uppercase":
                password += String.fromCharCode(getrandomint(65,90))
                break;
            case "numeric":
                password += String.fromCharCode(getrandomint(48,58))
                break; 
            case "specialcharacter":
                password += symbols[getrandomint(0,symbols.length)]
                break; 
                default: 
                break;

        }
    }

    document.getElementById("outputpassword") .innerHTML=password
}

function getrandomint(min,max){ 
    return Math.floor(Math.random() * (max - min)) + min;
} 

function getcharactertypes() {
    let lowercase = document.getElementById("lowercase").checked ;

    let uppercase = document.getElementById("uppercase").checked ;

    let numeric = document.getElementById("numeric").checked ;

    let specialcharacter = document.getElementById("specialcharacter").checked ;

    if (!(lowercase|| uppercase || numeric || specialcharacter )) { 
        throw new Error("please check at least one charactertype")
    }

        
    let types = [];
    if (lowercase) { 
        types.push("lowercase")
    } 
    if (uppercase) { 
        types.push("uppercase")
    }
    if (numeric) { 
        types.push("numeric")
    }
    if (specialcharacter) { 
        types.push("specialcharacter")
    } 

    return types;
}