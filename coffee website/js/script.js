let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function SubmitForm() {
    try{
        Email.send({ 
        Host : "smtp.elasticemail.com", 
        Port: 2525,
        Username : "shireenmujawar11@gmail.com", 
        Password : "3E57C2FB3EF1046A724D624359ABB9FC8388", 
        To : 'shireenmujawar11@gmail.com', 
        ReplyTo: document.getElementById("email").value,
        From : document.getElementById("email").value, 
        Subject : "New Query from Client", 
        Body : "Name: " + document.getElementById("name").value 
                + "<br>" +
                "E-mail: " + document.getElementById("email").value
                + "<br>" +
                "Mobile No.: " + document.getElementById("number").value
                
        })
            .then(message => alert(message));
        } catch(err) {
                    console.log(err)
        }
    }


    var addItemId=0;
    function addToCart(item){
        addItemId++;
        var selectedItem= document.createElement('div');
        selectedItem.classList.add('cartImg');
        selectedItem.setAttribute('id',addItemId);
        var img=document.createElement('img');
        img.setAttribute('src',item.children[0].currentSrc);
        var title=document.createElement('div');
        title.innerText=item.children[1].innerText;
        var lable=document.createElement('div');              
        lable.innerText=item.children[2].innerText;
         
        var cartItems=document.getElementById('title');
        selectedItem.append(img);                              
        selectedItem.append(title);                            
        selectedItem.append(lable);                  
        cartItems.append(selectedItem);
        console.log(addItemId);

        var delBtn=document.createElement('button');
        delBtn.classList.add('delBtn');
        delBtn.innerText='Delete';
        delBtn.setAttribute('onclick', 'del('+addItemId+')');
        selectedItem.append(delBtn);
    }

    function del(item){
        document.getElementById(item).remove();
    }
