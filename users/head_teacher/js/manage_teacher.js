$("form").submit(function(e) {
    e.preventDefault();
    var tname = $("input[name='tname']").val();
    var sname = $("input[name='sname']").val();




    $(".data-table tbody").append("<tr data-tname='" + tname + "' data-sname='" + sname + "' ><td>" + tname + "</td> <td>" + sname + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='tname']").val('');
    $("input[name='sname']").val('');

});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {

    var tname = $(this).parents("tr").attr('data-tname');
    var sname = $(this).parents("tr").attr('data-sname');


    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_tname" value="' + tname + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_sname" value="' + sname + '">');

    $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {
    var tname = $(this).parents("tr").attr('data-tname');
    var sname = $(this).parents("tr").attr('data-sname');


    $(this).parents("tr").find("td:eq(0)").text(tname);
    $(this).parents("tr").find("td:eq(1)").text(sname);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var tname = $(this).parents("tr").find("input[name='edit_tname']").val();
    var sname = $(this).parents("tr").find("input[name='edit_sname']").val();

    $(this).parents("tr").find("td:eq(0)").text(tname);
    $(this).parents("tr").find("td:eq(1)").text(sname);



    $(this).parents("tr").attr('data-tname', tname);
    $(this).parents("tr").attr('data-sname', sname);



    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});