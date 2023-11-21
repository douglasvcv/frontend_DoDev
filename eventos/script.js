function clicar(event){
 
    window.alert("Alorraaaaaaa")
    console.log(event)
}
document.getElementById('blabla').addEventListener('click', (Event)=>{
    alert("Cliquei e alertou nesta porra")
})

function focar(){
    console.log("focou nesta porra")
}
function desfocar(){
    console.log("desfocou nesta porra")
}
document.addEventListener('scroll', (Event) => {
    console.log("Scrollou nesta porra")
    console.log(Event)
})
window.addEventListener('resize', (Event) => {
    console.log("Mudou o tamanho nesta porra")
})