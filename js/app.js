let registro = document.getElementById('sign-up');
registro.addEventListener('click', ()=>{
    let username = document.getElementById('user_r').value;
    let password = document.getElementById('passwd_r').value;
    let rpassword = document.getElementById('rpasswd').value;

    let text = {"username": username, "password": password, "password_repeat": rpassword};
    
    
    fetch('http://localhost:8030/api/sign-up',{
        method:'POST',
        body: JSON.stringify(text),
        headers:{'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(json => {
       console.log(json) ;
       let msg=document.getElementById("msg1");
       msg.innerHTML += json.msg
    })
});

let ingreso = document.getElementById('login');
iniciar.addEventListener('click', ()=>{
    let username = document.getElementById('user_l').value;
    let password = document.getElementById('passwd_l').value;

    let text = {"username": username, "password": password};

    fetch('http://localhost:8030/api/login',{
        method:'POST',
        body: JSON.stringify(text),
        headers:{'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let msg=document.getElementById('msg2');
        msg.innerHTML += json.msg
        let token = json.token
        console.log(token)

            fetch('http://localhost:8030/api/secret-route', {
            headers: {'Authorization': 'Bearer '+token}
            })
            .then(response => response.json())
            .then(json=> {
                console.log(json)
                let msg = document.getElementById('msg3');
                msg.innerHTML+= json.msg
            })      
    })
})