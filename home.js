
function friends(){
    document.getElementById('main-home').style.color = "grey";
    document.getElementById('main-list').style.color = "grey";
    document.getElementById('friends').style.color = "#1316DD";
    document.getElementById('home-menu').style.display = 'none';
    document.getElementById('list-menu').style.display = 'none';
    document.getElementById('friends-menu').style.display = 'flex';


    var i;
    var bin = document.getElementById('body').querySelectorAll(".fa-trash");
    for (i = 0; i < bin.length; i++) {
        bin[i].style.display = "none";
    }
}

function home(){
    document.getElementById('main-home').style.color = "#1316DD";
    document.getElementById('friends').style.color = "grey";
    document.getElementById('main-list').style.color = "grey";
    document.getElementById('home-menu').style.display = 'flex';
    document.getElementById('friends-menu').style.display = 'none';
    document.getElementById('list-menu').style.display = 'none';
}

function list(){
    document.getElementById('main-list').style.color = "#1316DD";
    document.getElementById('friends').style.color = "grey";
    document.getElementById('main-home').style.color = "grey";
    document.getElementById('list-menu').style.display = 'flex';
    document.getElementById('home-menu').style.display = 'none';
    document.getElementById('friends-menu').style.display = 'none';
}




function myEdit(){
    var edit = document.getElementById('edit');
    var i;
    var bin = document.getElementById('body').querySelectorAll(".fa-trash");
    if (edit.style.color === "grey") {
        edit.style.color = "#1316DD";
        for (i = 0; i < bin.length; i++) {
            bin[i].style.display = "flex";
        }
    }else{
        i = 0;
        edit.style.color = "grey";
        for (i = 0; i < bin.length; i++) {
            bin[i].style.display = "none";
        }
    }
}

function myFind(){
    find = document.getElementById('find');
    if (find.style.color === "grey") {
        find.style.color = "#1316DD";
    }else{
        find.style.color = "grey";
    }
}