//====modifications ==/
$("form").submit(function(e) {
    e.preventDefault();
    var tname = $("input[name='tname']").val();

    //manage classes
    var classname = [];
    $.each($(".classname option:selected"), function() {
        classname.push($(this).val());
        classname.join(",");
    });
    //manage subjects
    var subjectname = [];
    $.each($(".subjectname option:selected"), function() {
        subjectname.push($(this).val());
        subjectname.join(",");
    });


    $(".data-table tbody").append("<tr data-tname='" + tname + "' data-subjectname='" + subjectname + "' data-classname='" + classname + "' ><td>" + tname + "</td> <td>" + subjectname + "</td><td>" + classname + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='tname']").val('');
    $("option[name='subjectname']").val('');
    $("option[name='classname]").val('');
    // $("option[name='classname']").val('');

});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {

    var tname = $(this).parents("tr").attr('data-tname');
    var subjectname = $(this).parents("tr").attr('data-subjectname');
    var classname = $(this).parents("tr").attr('data-classname');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_tname" value="' + tname + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_subjectname" value="' + subjectname + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_classname" value="' + classname + '">');

    $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {
    var tname = $(this).parents("tr").attr('data-tname');
    var subjectname = $(this).parents("tr").attr('data-subjectname');
    var classname = $(this).parents("tr").attr('data-classname');


    $(this).parents("tr").find("td:eq(0)").text(tname);
    $(this).parents("tr").find("td:eq(1)").text(subjectname);
    $(this).parents("tr").find("td:eq(2)").text(classname);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var tname = $(this).parents("tr").find("input[name='edit_tname']").val();
    var subjectname = $(this).parents("tr").find("input[name='edit_subjectname']").val();
    var classname = $(this).parents("tr").find("option[name='edit_classname']").val();

    $(this).parents("tr").find("td:eq(0)").text(tname);
    $(this).parents("tr").find("td:eq(1)").text(subjectname);
    $(this).parents("tr").find("td:eq(2)").text(classname);




    $(this).parents("tr").attr('data-tname', tname);
    $(this).parents("tr").attr('data-subjectname', subjectname);
    $(this).parents("tr").attr('data-classname', classname);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});
// ===== option select======//
$(document).ready(function() {

    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
        maxItemCount: 1,
        // searchResultLimit: 5,
        // renderChoiceLimit: 5
    });


});