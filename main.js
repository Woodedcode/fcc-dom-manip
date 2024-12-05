//////////////////////////////// DOM MANIPULATION

///////////  HOW TO CHANGE THE STYLING (inline-styling)
// const title = document.querySelector('#main-heading')
// title.style.color = 'red'
// console.log(title)

// const listItems = document.querySelectorAll('.list-item')
// // listItems.style.fontSize = '5rem' > wont work, you need to have a loop to change them all

// for ( i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '3rem';
// }

// console.log(listItems)


/////////// CREATING ELEMENTS
// const ul = document.querySelector('ul')
// const li = document.createElement('li')
// // adding elements
// ul.append(li)
// // modifying the text
// li.innerText = 'Zombie Land'

// const firstListItem = document.querySelector('.list-item');
// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent)
// console.log(firstListItem.innerHTML)

///////////  MODIFYING ATTRIBUTES & CLASSES
///// ID
// li.setAttribute('id', 'main-heading')
// li.removeAttribute('id')

// const title = document.querySelector('#main-heading')
// console.log(title.getAttribute('id'))

///// CLASS 
// li.classList.add('list-item')
// console.log(li.className)
// console.log(li.classList.contains('list-item'))
// li.classList.remove('list-item')
// console.log(li.className)

// console.log(li.classList.contains('list-item'))

/////////// REMOVE ELEMENTS
// li.remove()


/////////// NAVIGATING THE DOM
///// TRAVERSE THE DOM




///// PARENT NODE TRAVERSAL
// let ul = document.querySelector('ul')
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement)

///// CHILD NODE TRAVERSAL




///// SIBLING NODE TRAVERSAL









//////////////////////////////// GETELEMENTBYID()
// const title = document.getElementById('main-heading');
// console.log(title)


//////////////////////////////// GETELEMTENTBYCLASSNAME()
// const listItem = document.getElementsByClassName('list-item')
// console.log(listItem)


//////////////////////////////// GETELEMENTSBYTAGNAME()
// const listItem = document.getElementsByTagName('li')
// console.log(listItem)


//////////////////////////////// QUERYSELECTOR()
// const container = document.querySelector('div.container')
// console.log(container)



//////////////////////////////// QUERYSELECTORALL()
// const container = document.querySelectorAll('div')
// console.log(container)





