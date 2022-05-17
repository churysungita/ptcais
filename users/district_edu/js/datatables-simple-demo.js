modalConfirm(function(confirm) {
    if (confirm) {
        //Acciones si el usuario confirma
        $("#result").html("Approve");
    } else {
        //Acciones si el usuario no confirma
        $("#result").html("Disapprove");
    }
});