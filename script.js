let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);
//Item removing event
itemList.addEventListener('click', remove);
//Filtering items
filter.addEventListener('keyup', filterItems);

//Filter Items
function filterItems(e){
    //converting to lowercase
    let text = e.target.value.toLowerCase();
    //getting all the li tags
    let items = document.getElementsByTagName('li');
    //turning it into array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })
}

//Remove Items
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }
    }
}


//Add Item
function addItem(e){
    e.preventDefault();
    
    //Get input value
    let newItem = document.getElementById('item').value;

    //create li element
    let li= document.createElement('li');
    li.className = 'list-group-item';
    
    //Adding the input value in the li element
    li.appendChild(document.createTextNode(newItem));

    //Creating delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    //appending button to the item list
    li.appendChild(deleteBtn);
    //appending li to the item list
    itemList.appendChild(li);

    form.reset();
    
}