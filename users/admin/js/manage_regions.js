$("form").submit(function(e) {
    e.preventDefault();
    var rname = $("input[name='rname']").val();


    $(".data-table tbody").append("<tr data-name='" + rname + "'><td>" + rname + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='rname']").val('');

});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {
    var rname = $(this).parents("tr").attr('data-name');


    $(this).parents("tr").find("td:eq(0)").html('<input rname="edit_name" value="' + rname + '">');


    $(this).parents("tr").find("td:eq(1)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {
    var rname = $(this).parents("tr").attr('data-name');


    $(this).parents("tr").find("td:eq(0)").text(rname);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var rname = $(this).parents("tr").find("input[rname='edit_name']").val();


    $(this).parents("tr").find("td:eq(0)").text(rname);


    $(this).parents("tr").attr('data-name', name);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});