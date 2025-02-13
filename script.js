function showAlert() {
    alert('Hello! This is a JavaScript alert.');
}
function changetext() {
    document.getElementById('text').innerHTML = 'text changed!';
}
function handleClick() {
    document.getElementById('clickMessage').innerHTML = 'Button Clicked!';
}
function validateForm() {
    let name = document.getElementById('name').value;
    if(name == ''){
        alert('Please enter your name.');
        return false;
}
return true;
}
function checkNumber() {
    let num = parseInt(document.getElementById('numberInput').value);
    let result = 10 ? 'Grater than 10' : '10 or less';
    document.getElementById('numberResult').innerHTML = result;
}
function checkAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18){
        document.getElementById('ageResult').innerHTML = 'major';  
    }else { 
        document.getElementById('ageResult').innerHTML = 'minor'; 
    }     
}
function displayArrayItem() {
    let items = ['apple','banana','cherry','orange','mango'];
    let index = parseInt(document.getElementById('arrayIndex').value); 
    let result = items[index] || 'Invalid index';
    document.getElementById('arrayResult').innerHTML = result;
}
