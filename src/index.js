// write your code here
let newName = document.getElementById("new-name").value;
let restaurant = document.getElementById("new-restaurant").value;
let image = document.getElementById("new-image").value;
//fetch syntax in js?
fetch('http://localhost:3000',{
    method: 'GET',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newName,restaurant,image)
})
.then(res =>{

return res.json();})
.then(data => console.log(data))


function ramendetail(){
    let ramenDetail = document.getElementById("ramen-detail");
    ramenDetail.toggle('reveal');
    let ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.addEventListener("click", ramendetail);

}