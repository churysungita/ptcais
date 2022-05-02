$("form").submit(function(e) {
    e.preventDefault();
    var pname = $("input[name='pname']").val();
    var preg = $("input[name='preg']").val();
    var gender = $("input[name='gender']").val();



    $(".data-table tbody").append("<tr data-pname='" + pname + "' data-preg='" + preg + "' data-gender='" + gender + "' ><td>" + pname + "</td><td>" + preg + "</td> <td>" + gender + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='pname']").val('');
    $("input[name='preg']").val('');
    $("input[name='gender']").val('');

});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {

    var pname = $(this).parents("tr").attr('data-pname');
    var preg = $(this).parents("tr").attr('data-preg');
    var gender = $(this).parents("tr").attr('data-gender');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_pname" value="' + pname + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_preg" value="' + preg + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_gender" value="' + gender + '">');


    $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {
    var pname = $(this).parents("tr").attr('data-pname');
    var preg = $(this).parents("tr").attr('data-preg');
    var gender = $(this).parents("tr").attr('data-gender');


    $(this).parents("tr").find("td:eq(0)").text(pname);
    $(this).parents("tr").find("td:eq(1)").text(preg);
    $(this).parents("tr").find("td:eq(2)").text(gender);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var pname = $(this).parents("tr").find("input[name='edit_pname']").val();
    var preg = $(this).parents("tr").find("input[name='edit_preg']").val();
    var gender = $(this).parents("tr").find("input[name='edit_gender']").val();


    $(this).parents("tr").find("td:eq(0)").text(pname);
    $(this).parents("tr").find("td:eq(1)").text(preg);
    $(this).parents("tr").find("td:eq(2)").text(gender);



    $(this).parents("tr").attr('data-sname', pname);
    $(this).parents("tr").attr('data-sreg', preg);
    $(this).parents("tr").attr('data-rname', gender);



    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});