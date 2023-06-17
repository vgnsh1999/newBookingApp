const form = document.getElementById('my-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const obj = {
        username : document.getElementById('name').value,
        email : document.getElementById('email').value,
    }
    //connecting to backend
    axios.post("https://crudcrud.com/api/260287f38d41496da1c018f6f93dac20/appointmentData" ,obj)
          .then((response) =>{
            document.body.innerHTML = document.body.innerHTML + response.data;
            //console.log(response);
          })  
          .catch((err)=>{
            document.body.innerHTML = document.body.innerHTML + "Something went wrong";
            //console.log(err)
          })


    //localStorage.setItem(obj.email,JSON.stringify(obj));

    //parent
    const ul = document.getElementById('users');
    //making li tags
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(obj.username+'-'+obj.email));
    //making delete buttons
    const delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('Delete'));
    delBtn.className='delete';
    //adding deltbtn to li
    li.appendChild(delBtn);
    //making edit buttons
    const editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.className='edit';
    //adding editbtn to li
    li.appendChild(editBtn);

    //append li to ul
    ul.appendChild(li);

    //delete funtionality
    delBtn.addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                //targetting parent
                const li = e.target.parentElement;
                ul.removeChild(li);
                localStorage.removeItem(obj.email,JSON.stringify(obj));
            }
        }
    })

    //edit funtionality
    editBtn.addEventListener('click',(e)=>{
        if(e.target.classList.contains('edit')){
            //targetting parent
            const li = e.target.parentElement;
            ul.removeChild(li);
            localStorage.removeItem(obj.email,JSON.stringify(obj));
            //edit
            document.getElementById('name').value = obj.username;
            document.getElementById('email').value = obj.email;
        }
    })

})