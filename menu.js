
function load(){;
    const xhr = new XMLHttpRequest();
    xhr.open('GET','menu.json',true);
    xhr.onload= function(){
        if(this.status==200){
            let items = JSON.parse(this.responseText);
            let output="";
            for(let i in items){
                output +=
                '<div class=menu-item>'+
                '<img src='+items[i].image+' width=512px height=256px>'+
                '<ul>'+
                '<li><div class="list-text-title">Name:</div>'+
                items[i].name+
                '</li>'+
                '<li><div class="list-text-title">Price:</div>'+
                items[i].price+
                '</li>'+
                '</ul>'+
                '</div>';
            }
            document.getElementById("menu-container").innerHTML=output
        }
    }
    xhr.send()
}
load()