// const { clear } = require("console");

let dis_1 = document.querySelector(".display-1");
let dis_2 = document.querySelector(".display-2");
let equal = document.querySelector(".result");
let allNumbers = document.querySelectorAll(".number");
let allOperator = document.querySelectorAll(".opration");
let equalEl = document.querySelector(".equal");
let allClear = document.querySelector(".allClear")
let lastClear = document.querySelector(".lastClear");

var fstNum = '';
var sndNum = '';
var result = null;
var lastOperator = '';
var haveDot = false;


allNumbers.forEach(num => {

    num.addEventListener("click", function (e) {

        if (e.target.innerHTML === "." && haveDot === false) {

            haveDot = true;


        } else if (e.target.innerHTML === "." && haveDot !== false) {

            return false;

        }

        sndNum += e.target.innerHTML;
        dis_2.innerHTML = parseFloat(sndNum);

    })


})

allOperator.forEach(op => {

    op.addEventListener("click", function (e) {

        if (sndNum === "") {

            // console.log('snd is empty')
            return false

        }

        haveDot = false;

        const mathoperatorName = e.target.innerHTML;

        if (fstNum && sndNum && lastOperator) {

            mathoperator();


        } else {

            result = parseFloat(sndNum)

        }

        clearVar(mathoperatorName)

        lastOperator = mathoperatorName;

    })

})

function clearVar(name) {

    fstNum += sndNum + " " + name + " ";
    dis_1.innerHTML = fstNum;
    dis_2.innerHTML = parseFloat(0);
    sndNum = "";
    equal.innerHTML = result;
}

function mathoperator() {

    if (lastOperator === "x") {

        result = parseFloat(result) * parseFloat(sndNum);

    } else if (lastOperator === "+") {

        result = parseFloat(result) + parseFloat(sndNum)

    } else if (lastOperator === "-") {

        result = parseFloat(result) - parseFloat(sndNum)

    } else if (lastOperator === "/") {

        result = parseFloat(result) / parseFloat(sndNum)

    }
    else if (lastOperator === "%") {

        result = parseFloat(result) % parseFloat(sndNum);

    }

}

equalEl.addEventListener("click", function (e) {

    if (!fstNum) {
        return false;
    }
    if (!sndNum) {
        return false;
    }
    haveDot = false;
    mathoperator()
    clearVar(name)
    equal.innerHTML = result;
    sndNum = result;
    fstNum = "";
})
allClear.addEventListener("click", function xing() {

    // mathoperator()
    // clearVar()
    sndNum = "";
    fstNum = "";
    dis_2.innerHTML = 0;
    dis_1.innerHTML = 0;
    result = "";
    document.querySelector(".result").innerHTML = "0";

})
lastClear.addEventListener("click", function (e) {

    if (!sndNum) {
        return false;
    }

    dis_2.innerHTML = "";
    sndNum = "";

})

window.addEventListener("keydown", function (e) {

    if (e.key === "0") {

        clickButtonEl(e.key);

    }
    else if (e.key === "1") {

        clickButtonEl(e.key);

    }
    else if (e.key === "2") {

        clickButtonEl(e.key);

    }
    else if (e.key === "3") {

        clickButtonEl(e.key);

    }
    else if (e.key === "4") {

        clickButtonEl(e.key);

    }
    else if (e.key === "5") {

        clickButtonEl(e.key);

    }
    else if (e.key === "6") {

        clickButtonEl(e.key);

    }
    else if (e.key === "7") {

        clickButtonEl(e.key);

    }
    else if (e.key === "8") {

        clickButtonEl(e.key);

    }
    else if (e.key === "9") {

        clickButtonEl(e.key);

    }
    else if (e.key === ".") {

        clickButtonEl(e.key);

    }
    else if (e.key === "x") {

        clickOperatinEl(e.key);

    }
    else if (e.key === "+") {

        clickOperatinEl(e.key);

    } else if (e.key == "Enter") {

        equalation()

    } else if (e.key === "C") {

        clearingAll(e.key);

    }
    else if (e.key === "c") {

        clearingAll(e.key);

    }

})

function clickButtonEl(key) {

    allNumbers.forEach(button => {

        if (button.innerHTML === key) {

            button.click();

        }

    })

}

function clickOperatinEl(key) {

    allOperator.forEach(op => {

        if (op.innerHTML === key) {

            op.click();

        }

    })

}

function equalation() {

    equalEl.click();

}
function clearingAll() {

    allClear.click();

}