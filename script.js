
$(document).ready(function(){

var root = $('#todoApp');
var title = $('<h2>JQuery To-do App</h2>');
var input = $('<input placeholder="add a item to do"/>');
var btn = $('<button>Add</button>');
var list = $('<ul></ul>');
var deleteBtn = $('<button>Delete</button>')


root.append(title);
root.append(input);
root.append(btn);
root.append(deleteBtn);
root.append(list);


btn.on('click',function() {
    var userInput = input.val();
    if (userInput){
        var newTodo = $('<li> </li>');
        newTodo.text(userInput);
        list.prepend(newTodo);
        input.val('')
    } else {
        alert('Please add before submitting.')
    }
})

list.on('click','li',function() {
   $(this).toggleClass('done');
})

deleteBtn.on('click',function() {
    $('li.done').remove();
})


})