let getID = (id) =>{
    return document.getElementById(id);
}

const userName = getID('userName');
// console.log(userName);
const password = getID('password');
// console.log(password);

function handleLogin(){
    console.log("userName", userName.value);
    if(userName.value === "admin" && password.value === "12"){
        alert("ĐĂNG NHẬP THÀNH CÔNG");
        return window.location.href = "./giao-dien-iot/giaoDien.html";
    }else{
        alert("ĐĂNG NHẬP BỊ TỪ CHỐI");
    }

}