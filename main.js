let users = [
    { name: "jaloliddin", login: 'jonka12', parol: 170 },
    { name: "emir", login: 'user12', parol: 170 },
    { name: "salohiddin", login: 'saloh9090', parol: 170 },
];


document.getElementById('loginForm').addEventListener('submit', function(event){
event.preventDefault();



    let inputtime = document.getElementById('input').value;
    let passwordtime = Number(document.getElementById('passwordinput').value);


    for (let i = 0; i < users.length; i++) {
        let user = users[i];


        let userfound = false;

        if(user.login === inputtime && user.parol === passwordtime){
            document.getElementById('answer').innerHTML = `xush kelibsiz: ${user.name}`
            userfound = true;
            break;
        }

        if(!userfound){
            document.getElementById('answer').innerHTML = ` xato parol`
        }
        
    }
})



document.getElementById('add').addEventListener('click', function(event){

    let sa = prompt('savol kriting:')
    let savol = document.createElement('p');
    savol.textContent = `savolingiz ${sa} `


    document.getElementById('Question').appendChild(savol)
})






