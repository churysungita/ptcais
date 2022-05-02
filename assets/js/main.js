$(document).ready(function() {
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
$(document).ready(function() {
    $('#dtHorizontalVerticalExample').DataTable({
        "scrollX": true,
        "scrollY": 200,
    });
    $('.dataTables_length').addClass('bs-select');
});