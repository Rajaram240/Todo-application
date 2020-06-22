var ul=document.getElementById('list');
var li;
var addbutton=document.getElementById('add');
addbutton.addEventListener('click',addItem);
var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);





function addItem()
{
var input =document.getElementById('input');
var item=input.value;
ul=document.getElementById('list');
var textnode=document.createTextNode(item);

if(item === '')
{
     return false;   
}
else{
    //create li
    li=document.createElement('li');
    //create check box
    var checkbox=document.createElement('input')
    checkbox.type='checkbox';
    checkbox.setAttribute('id','check')
//create a lable
var lable=document.createElement('lable');
lable.setAttribute('for','item')
//add these elemnts in web page
ul.appendChild(lable);
li.appendChild(checkbox);
lable.appendChild(textnode);
li.appendChild(lable);
ul.insertBefore(li,ul.childNodes[0]);
setTimeout(()=>{
    li.className='visual';

},2)
}
input.value=''

}
function removeItem()
{
    li=ul.children;
    //here 4 list will open and for loop will iterate for each listand while will check id the index and child confition true
    //then will remove the child.
for (let index = 0; index < li.length; index++) {
    while(li[index]&& li[index].children[0].checked){
        ul.removeChild(li[index])
    }}
}

