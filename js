//upload image storage
document.getElementById("theFile").value

var button = document.getElementById('Button');

//Upload File 
$('input#theFile').on('submit', function() {
    console.log(this);

    var reader = new FileReader();
    reader.onload = function(e) {
        console.log(reader.result + '->' + typeof reader.result)
        var thisImage = reader.result;
        localStorage.setItem("imgData", thisImage);
    };
    reader.readAsDataURL(this.files[0]);
});


$('input#show').click(function() {
    var dataImage = localStorage.getItem('imgData');
    console.log(dataImage);
    var imgCtr = $('<img/>').prop('src', dataImage);
    $('div#imgContainer').append(imgCtr);
});
