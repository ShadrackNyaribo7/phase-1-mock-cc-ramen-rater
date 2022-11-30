// write your code here
let newname = document.getElementById("new-name").value;
let restaurant = document.getElementById("new-restaurant").value;
let image = document.getElementById("new-image").value;
fetch('http://localhost:3000',{
    method: 'GET',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newname,restaurant,image)
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