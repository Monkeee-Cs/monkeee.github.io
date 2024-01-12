function root() {
    let number = undefined;
    number = window.prompt('Enter numbere here:', '');
    const result = `√${number} = ${Math.sqrt(number)} (${Math.sqrt(number)}²)`;
    document.getElementById('result').innerHTML = result;
}

function squere() {
    let number = undefined;
    number = prompt('Enter a number here:');
    const result = `${number}² = ${number * number}`
    document.getElementById('result').innerHTML = result;
}