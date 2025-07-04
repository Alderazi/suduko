// variables
let mistakes=0
const cell=document.querySelectorAll('.smallBox') 
const boxNumber=document.querySelectorAll('.Number')
let selctedID=null;
let selectedCell = null
let flag =false;
const soulution=[
     [5,3,6,1,7,2,8,9,4],
     [8,2,7,9,6,4,1,5,3],
     [9,4,1,3,5,8,2,6,7],
     [7,1,5,6,4,3,9,2,8],
     [3,4,9,7,8,2,5,1,6],
     [8,2,6,1,9,5,7,3,4],
     [4,8,1,3,6,9,2,5,7],
     [2,9,5,4,7,1,6,3,8],
     [6,7,3,5,8,2,4,1,9]

]
const generated=   
    [['','',6,'',7,'',8,'',''],
     ['','','','',6,'',1,'',3],
     ['','',1,'',5,'',2,'',''],
     ['','',5,'',4,'','','',8],
     ['',4,'',7,'',2,'',1,''],
     [8,'','','',9,'',7,'',''],
     ['','',1,'',6,'',2,'',''],
     [2,'',5,'',7,'','','',''],
     ['','',3,'',8,'',4,'','']]


// functions

//check weather there is Number or not
const thereIsNumber=(event)=>{
    const Num=event.target.innerText
    selctedID=Num
selecting(event)
}

// make sure that when hover over number it will not display cursor on the cell
const selecting=(cell)=>{
    const text =cell.target.innerText
    if(!(text==='')){
    cell.target.style.cursor = 'auto';
    }

}
// when selecting cell that there is no number on it it will display click effect and background color
const isSelcted=(event)=>{
    const cell=event.target
    if(flag===true && selectedCell===cell&& cell.innerText===''){
        unSelectElemnt(cell)
    }
    else if(flag===true && !(selectedCell===cell )&& cell.innerText===''){
        selectNewElement(selectedCell,cell)

    }else if(flag===false && cell.innerText=== ''){
        selctElement(cell)
    }

}
const unSelectElemnt=(event)=>{
    event.classList.remove("selected")
    flag=false
    selectedCell=null
}
const selctElement=(event)=>{
    event.classList.add("selected")
    flag=true
    selectedCell=event
}
const selectNewElement=(oldCell,newCell)=>{
    selectedCell=newCell
    oldCell.classList.remove("selected")
    newCell.classList.add("selected")
    flag=true
    
}

// generate numbers from generated array to the cells
const generate=()=>{
for (let i = 0; i < generated.length; i++) {
    for (let j = 0; j < generated[i].length; j++) {
        let index = i * 9 + j;  
        cell[index].innerText = generated[i][j]; 
    }
}

}
// when player makes mistake it will increase
const mistakeHappend=()=>{
    mistakes++;
    document.querySelector("h3").innerText=(`mistakes:${mistakes} /3`)
    
    
    isLose()

}
// when the limit of mistakes have been reached max number
const isLose=()=>{
    if (mistakes===3){

setTimeout(function() {
  alert("game over you lost");
}, 10);   
 }

}

//return the number from the box
const prinNumber =(event)=>{
    const number=event.target.innerText
    return number
}
   for(let i=0;i<cell.length;i++){
    cell[i].addEventListener('click',isSelcted)
    cell[i].addEventListener('mouseover',thereIsNumber)
   }
   for (let j=0;j<boxNumber.length;j++){
    boxNumber[j].addEventListener('click',prinNumber)
   }
generate()