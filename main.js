
const Method = document.querySelector("#Method")
const buttons = document.querySelectorAll("button");

function RmColor(number){
    return Math.floor(Math.random() * (number + 1))
}
function Color(e) {
    const rbg = `rgb(${RmColor(255)} ${RmColor(255)} ${RmColor(255)})`;
    e.target.style.backgroundColor = rbg;
    console.log(e);
}


function SetChoice(){
    const choice = Method.value;
    switch(choice){
        case "Click":
            for(const button of buttons){
                button.removeEventListener("click", Color);
                button.removeEventListener("mouseover", Color);
                button.addEventListener("click", Color);
            };
        break;
        case "Focus":
            for(const button of buttons){
                button.removeEventListener("click", Color);
                button.removeEventListener("mouseover", Color);
                button.addEventListener("mouseover", Color);
            };
        break;
        case "ClearAll":
            for(const button of buttons){
                button.removeEventListener("click", Color);
                button.removeEventListener("mouseover", Color);
                button.style.backgroundColor = "";
            };
        break;
        case "Clear":
            for(const button of buttons){
                button.removeEventListener("click", Color);
                button.removeEventListener("mouseover", Color);
                button.addEventListener("mouseover", ()=>{
                    button.style.backgroundColor = "";
                });
            };
    }
};
Method.addEventListener("change", SetChoice)
