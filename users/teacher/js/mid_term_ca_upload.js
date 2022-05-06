$("form").submit(function(e) {
    e.preventDefault();
    var pmarks = $("input[name='pmarks']").val();

    //manage pupils name
    var pname = [];
    $.each($(".pname option:selected"), function() {
        pname.push($(this).val());
        pname.join(",");
    });
    //manage subjects
    var subjectname = [];
    $.each($(".subjectname option:selected"), function() {
        subjectname.push($(this).val());
        subjectname.join(",");
    });


    $(".data-table tbody").append("<tr data-subjectname='" + subjectname + "' data-pname='" + pname + "' data-pmarks='" + pmarks + "'  ><td>" + subjectname + "</td> <td>" + pname + "</td><td>" + pmarks + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");


    $("option[name='subjectname']").val('');
    $("option[name='pname]").val('');
    $("input[name='pmarks']").val('');
    // $("option[name='classname']").val('');

});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {


    var subjectname = $(this).parents("tr").attr('data-subjectname');
    var pname = $(this).parents("tr").attr('data-pname');
    var pmarks = $(this).parents("tr").attr('data-pmarks');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_subjectname" value="' + subjectname + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_pname" value="' + pname + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_pmarks" value="' + pmarks + '">');

    $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {

    var subjectname = $(this).parents("tr").attr('data-subjectname');
    var pname = $(this).parents("tr").attr('data-pname');
    var pmarks = $(this).parents("tr").attr('data-pmarks');



    $(this).parents("tr").find("td:eq(0)").text(subjectname);
    $(this).parents("tr").find("td:eq(1)").text(pname);
    $(this).parents("tr").find("td:eq(2)").text(pmarks);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var subjectname = $(this).parents("tr").find("input[name='edit_subjectname']").val();
    var pname = $(this).parents("tr").find("input[name='edit_pname']").val();
    var pmarks = $(this).parents("tr").find("input[name='edit_pmarks']").val();


    $(this).parents("tr").find("td:eq(0)").text(subjectname);
    $(this).parents("tr").find("td:eq(1)").text(pname);
    $(this).parents("tr").find("td:eq(2)").text(pmarks);




    $(this).parents("tr").attr('data-subjectname', subjectname);
    $(this).parents("tr").attr('data-pname', pname);
    $(this).parents("tr").attr('data-pmarks', pmarks);


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