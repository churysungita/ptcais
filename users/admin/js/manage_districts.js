$("form").submit(function(e) {
    e.preventDefault();
    var dname = $("input[name='dname']").val();


    $(".data-table tbody").append("<tr data-dname='" + dname + "'><td>" + dname + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[dname='dname']").val('');

});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {
    var dname = $(this).parents("tr").attr('data-dname');


    $(this).parents("tr").find("td:eq(0)").html('<input dname="edit_name" value="' + dname + '">');


    $(this).parents("tr").find("td:eq(1)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {
    var dname = $(this).parents("tr").attr('data-dname');


    $(this).parents("tr").find("td:eq(0)").text(dname);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var dname = $(this).parents("tr").find("input[dname='edit_name']").val();


    $(this).parents("tr").find("td:eq(0)").text(dname);


    $(this).parents("tr").attr('data-dname', dname);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});