function youClicked(obj){
    click.innerHTML = `You clicked: <span style="color: ${colorPicker.value} "> ${obj.textContent} </span>`
  
 
    
}

const colorPicker = document.querySelector("#colorPicker")
const click = document.querySelector(".click");

