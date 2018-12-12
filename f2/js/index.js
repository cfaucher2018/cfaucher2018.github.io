function annoy(){
var fname = promot("tell me your mane");

document.getElementById("annoy").innerHTML = "I am annoyed"; 
while(true){
alert(fname + " are we there yet");
}
}

function mark_present()
{
    var cadet_name = $('#cadet_name').val();
    alert(cadet_name+ " is here!");
    $('#present_cadets').append("<ul id = 'cadets_list'></ul>");
    $('#cadets_list').append("<li>"+cadet_name+"</li>"); 
}
