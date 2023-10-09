function myFunction(){
    document.getElementById("1").textContent = 'C'
}
i = 0
function imageChange(){
    document.querySelector("img").src = `images/${i+1}.jpg`
    i+= 1
}