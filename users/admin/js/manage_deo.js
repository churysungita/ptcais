$("form").submit(function(e) {
    e.preventDefault();
    var deoname = $("input[name='deoname']").val();
    var wname = $("input[name='wname']").val();





    // select menus
    //manage classes
    var regname = [];
    $.each($(".regname option:selected"), function() {
        regname.push($(this).val());
        // regname.join(",");
    });
    //manage subjects
    var dname = [];
    $.each($(".dname option:selected"), function() {
        dname.push($(this).val());
        // dname.join(",");
    });

    // end select menus
    $(".data-table tbody").append("<tr data-deoname='" + deoname + "' data-regname='" + regname + "' data-dname='" + dname + "' data-wname='" + wname + "'  ><td>" + deoname + "</td> <td>" + regname + "</td><td>" + dname + "</td><td>" + wname + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
    $("input[name='deoname']").val('');
    $("option[name='regname']").val('');
    $("option[name='dname]").val('');
    $("input[name='wname']").val('');

});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {

    var deoname = $(this).parents("tr").attr('data-deoname');
    var regname = $(this).parents("tr").attr('data-regname');
    var dname = $(this).parents("tr").attr('data-dname');
    var wname = $(this).parents("tr").attr('data-wname');



    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_deoname" value="' + deoname + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_regname" value="' + regname + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_dname" value="' + dname + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_wname" value="' + wname + '">');


    $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {
    var deoname = $(this).parents("tr").attr('data-deoname');
    var regname = $(this).parents("tr").attr('data-regname');
    var dname = $(this).parents("tr").attr('data-dname');
    var wname = $(this).parents("tr").attr('data-wname');


    $(this).parents("tr").find("td:eq(0)").text(deoname);
    $(this).parents("tr").find("td:eq(1)").text(regname);
    $(this).parents("tr").find("td:eq(2)").text(dname);
    $(this).parents("tr").find("td:eq(3)").text(wname);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var deoname = $(this).parents("tr").find("input[name='edit_deoname']").val();
    var regname = $(this).parents("tr").find("option[name='edit_regname']").val();
    var dname = $(this).parents("tr").find("option[name='edit_dname']").val();
    var wname = $(this).parents("tr").find("input[name='edit_wname']").val();




    $(this).parents("tr").find("td:eq(0)").text(deoname);
    $(this).parents("tr").find("td:eq(1)").text(regname);
    $(this).parents("tr").find("td:eq(2)").text(dname);
    $(this).parents("tr").find("td:eq(3)").text(wname);



    $(this).parents("tr").attr('data-deoname', deoname);
    $(this).parents("tr").attr('data-regname', regname);
    $(this).parents("tr").attr('data-dname', dname);
    $(this).parents("tr").attr('data-wname', wname);



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