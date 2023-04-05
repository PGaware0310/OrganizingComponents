var items=document.getElementById('listOfItems');

function saveTo(event) {
    event.preventDefault()
    //Gets the element--> use event.target
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phn = event.target.phonenumber.value;

    const obj = {
        name,
        email,
        phn
    }
    //JSON converts JS obj to string(Exchange data to/from server)
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserDetails(obj);
}
function showUserDetails(obj) {
    const ParentEle = document.getElementById('listOfItems');
    //create child element li
    const ChildEle = document.createElement('li');
    //create button as child element
    const delbtn=document.createElement('button');
    const editbtn=document.createElement('button');
    //add class name to button
    delbtn.className='btn';
    editbtn.className='btn';
    //add text on button
    var delbtntext=document.createTextNode('Delete');
    var editbtntext=document.createTextNode('Edit');
    //add text to button using appendchild
    delbtn.appendChild(delbtntext);
    editbtn.appendChild(editbtntext);
    //fetch text content of an element
    ChildEle.textContent = obj.name + '-' + obj.email + '-' + obj.phn;

    //append text content with button
    ChildEle.appendChild(delbtn);
    ChildEle.appendChild(editbtn);
    //append li
    ParentEle.appendChild(ChildEle);
    ParentEle.appendChild(ChildEle);

    //for deleting an item
    delbtn.onclick=()=>{
        localStorage.removeItem(obj.email);
        ParentEle.removeChild(ChildEle);
    }

    //for editing an item
    editbtn.onclick=()=>{
       localStorage.removeItem(obj.email);
       ParentEle.removeChild(ChildEle);
       document.getElementById('uname').value=obj.name;
       document.getElementById('mail').value=obj.email;
       document.getElementById('phn').value=obj.phn;
        }
    }
    

