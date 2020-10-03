
const passwordOutput = document.querySelector('span#generated');
const lengthInput = document.querySelector('#length');
const uppercaseInput = document.querySelector('#uppercaseLetter');
const numberInput = document.querySelector('#number');
const symboleInput = document.querySelector('#symbole'); 

const btn = document.getElementById('genBtn');

const randomString = (exp, ...params) => {
    let string = '';
    let tempArr = [];
    params.forEach((item, i) => {
        let index = 0;
        while( index < item) {
            const randomIndex = Math.floor(Math.random() * exp[i].length);
            tempArr.push(exp[i][randomIndex]);
            index++;
        }
        string = tempArr.sort(() => Math.random() - .5).join('');
    });
    return string;
}

btn.addEventListener('click', e => {
    passwordOutput.innerHTML = '';
    e.preventDefault;
    const value = {
        length: parseInt(lengthInput.value) || 3,
        uppercase: parseInt(uppercaseInput.value) || 0,
        number: parseInt(numberInput.value) || 0,
        symbole: parseInt(symboleInput.value) || 0,
    }  
    const result = randomString(exp, (value.length - (value.uppercase + value.number + value.symbole)), value.uppercase, value.number, value.symbole);
    passwordOutput.innerHTML = result;
});

const exp = {
    0: 'abcdefghijklmnopqrstuvwxyz',
    1: 'ABCDEFGHIJKLMNPQRSTUVWXYZ',
    2: '0123456789',
    3: '€@~#+*!§$%&/()[]{\\}=?'
}