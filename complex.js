let btn1 = document.getElementById("btn1");
btn1.addEventListener('click',() => {
    let workerObj = new Worker("worker.js");
    workerObj.postMessage("worker start working...")
    workerObj.onmessage = function(e){
        document.querySelector("#output").innerHTML = e.data;

    }
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click',() =>{
    document.querySelector("#hi..").innerHTML.innerHTML <= "hi" + "<br/>"
})