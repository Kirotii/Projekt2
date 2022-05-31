document.getElementById("button").addEventListener('click',load)
function load(){;
    const xhr = new XMLHttpRequest();
    xhr.open('GET','kajak.json',true);
    xhr.onload= function(){
        if(this.status==200){
            let items = JSON.parse(this.responseText);
            let output="";
            for(let i in items){
                output +=
                '<div class=item>'+
                '<img src='+items[i].image+'width=256 height=256>'+
                '<ul>'+
                '<li><div class="list-text-title">Name:</div>'+
                items[i].name+
                '</li>'+
                '<li><div class="list-text-title">Description:</div>'+
                items[i].description+
                '</li>'+
                '</ul>'+
                '</div>'
            }
            document.getElementById("items-container").innerHTML=output
        }
    }
    xhr.send()
}