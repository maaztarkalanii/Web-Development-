// Dom manipulation 
// //  GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title);

// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// const listItems= document.getElementsByTagName('li');
// console.log(listItems);

// const container= document.querySelector('div');
// console.log(container);

// const container= document.querySelectorAll('div');
// console.log(container);

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';
// console.log(title);

// const listItems = document.querySelectorAll('.list-items')


// for(i = 0; i<listItems.length; i++){
//     listItems[i].style.fontSize = "1rem";

// }

// for(i = 0; i<listItems.length; i++){
//     listItems[i].style.backgroundColor = "white";

// }
// console.log(listItems)




// adding a new element

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// ul.append(li);
// li.innerText= 'JURRASIC PARK';

//CUSTOM ATTRIBUTES......

// li.style.color= " black";
// li.style.fontFamily= " arial";

// li.style.backgroundColor= " white";
// li.style.flex= " display";
// li.style.flexDirection = 'column'
// li.style.justifyContent= " center";
// li.style.alignContent= " center";

// SETATTRIBUTES......


// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// ul.append(li);
// li.innerText= 'JURRASIC PARK';

// li.setAttribute('class' , 'list-items');

// Traverese the DOM

//Parent Node Traversal 

// let ul= document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
 

// const html = document.documentElement;
// console.log(html.parentElement);
// console.log(html.parentNode);


// child Node traversal

let ul = document.querySelector('ul');

// console.log( ul.childNodes);
// console.log( ul.firstChild);
// console.log( ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';


console.log(ul.previousSibling);
console.log(ul.nextSibling);