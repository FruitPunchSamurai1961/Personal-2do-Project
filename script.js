/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
/* eslint-disable no-var */

// select all the needed elements from Java
var deleteTodo = document.querySelectorAll('span');
var strikeThrough = document.querySelectorAll('li');
var input = document.querySelector('input');
var ul = document.querySelector('ul');

// delete done todos
for (var i = 0; i < deleteTodo.length; i++) {
  deleteTodo[i].addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
      this.parentNode.remove();
    }
  });
}

// strikethrough effect on done todos
for (var i = 0; i < strikeThrough.length; i++) {
  strikeThrough[i].addEventListener('click', function(e) {
    if (e.target.matches('LI')) {
      this.classList.toggle('done');
    }
  });
}

// add a todo task
input.addEventListener('keypress', function(e) {
  if (event.keyCode === 13) {
    var newTodo = input.value;
    var newLi = document.createElement('li');
    newLi.innerHTML = '<span>X</span> ' + newTodo;
    this.value = '';
    ul.appendChild(newLi);
    strikeThrough = document.querySelectorAll('li');
    addLiListeners(strikeThrough);
    deleteTodo = document.querySelectorAll('span');
    addSpanListeners(deleteTodo);
  }
});

// event listener to strike through new created lis
var addLiListeners = function(liArr) {
  for (var i = 0; i < liArr.length; i++) {
    liArr[i].addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        this.classList.toggle('done');
      }
    });
  }
};
// eventlistener to delete new created span
var addSpanListeners = function(spanArr) {
  for (var i = 0; i < spanArr.length; i++) {
    spanArr[i].addEventListener('click', function(e) {
      if (e.target.tagName === 'SPAN') {
        this.parentNode.remove();
      }
    });
  }
};
