function getID(id) {

    document.getElementById('demo').value = id
}

function getToEdit(id,title,desc){
    document.getElementById('id').value = id
    document.getElementById('title').value = title
    document.getElementById('desc').innerText= desc

}