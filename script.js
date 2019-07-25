//Big Hello World In page

// var h= document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);

//while loop

// var val= 5;

// while (val > 0) {
//     console.log(val);
//     val-- // val = val - 1;
    
// }

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

function addItem() {

    var input =document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list')
    var textnode =document.createTextNode(item)

    if (item === ''){
        return false;
    } else{

        //create li 
        li = document.createElement('li');
        //Create Checkbox
        var checkbox = document.createElement('input');
        checkbox.type ='checkbox';
        checkbox.setAttribute('id', 'check');
        //Create Label
        var label =document.createElement('label')
        label.setAttribute('for','item')//optional
        //add this element on webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        //visual affect not working check after some time
        setTimeout(() => {
            li.className = 'visual';
            
        }, 6);

        input.value ='';


    
    }
    
}
function removeItem() {

   li = ul.children;
   for (let index = 0; index < li.length; index++) {
      while (li[index] && li[index].children[0].checked) {
          ul.removeChild(li[index])
          
      }
   }
   
    
}
