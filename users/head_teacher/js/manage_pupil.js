$("form").submit(function(e) {
    e.preventDefault();
    var pname = $("input[name='pname']").val();
    var preg = $("input[name='preg']").val();
    var gender = $("input[name='gender']").val();
    var regname = $("input[name='regname']").val();
    var dname = $("input[name='dname']").val();
    var sname = $("input[name='sname']").val();
    var cname = $("input[name='cname']").val();





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
    var sname = [];
    $.each($(".sname option:selected"), function() {
        sname.push($(this).val());
        // regname.join(",");
    });
    //manage subjects
    var cname = [];
    $.each($(".cname option:selected"), function() {
        cname.push($(this).val());
        // dname.join(",");
    });



    $(".data-table tbody").append("<tr data-pname='" + pname + "' data-preg='" + preg + "' data-gender='" + gender + "'data-regname='" + regname + "' data-sname='" + sname + "' data-dname='" + dname + "' data-cname='" + cname + "' ><td>" + pname + "</td><td>" + preg + "</td> <td>" + gender + "</td><td>" + regname + "</td><td>" + dname + "</td><td>" + sname + "</td><td>" + cname + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='pname']").val('');
    $("input[name='preg']").val('');
    $("input[name='gender']").val('');
    $("option[name='regname']").val('');
    $("option[name='sname]").val('');
    $("option[name='dname]").val('');
    $("option[name='cname']").val('');
});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {

    var pname = $(this).parents("tr").attr('data-pname');
    var preg = $(this).parents("tr").attr('data-preg');
    var gender = $(this).parents("tr").attr('data-gender');
    var regname = $(this).parents("tr").attr('data-regname');
    var dname = $(this).parents("tr").attr('data-dname');
    var sname = $(this).parents("tr").attr('data-sname');
    var cname = $(this).parents("tr").attr('data-cname');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_pname" value="' + pname + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_preg" value="' + preg + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_gender" value="' + gender + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_regname" value="' + regname + '">');
    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_dname" value="' + dname + '">');
    $(this).parents("tr").find("td:eq(5)").html('<input name="edit_sname" value="' + sname + '">');
    $(this).parents("tr").find("td:eq(6)").html('<input name="edit_cname" value="' + cname + '">');


    $(this).parents("tr").find("td:eq(7)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {
    var pname = $(this).parents("tr").attr('data-pname');
    var preg = $(this).parents("tr").attr('data-preg');
    var gender = $(this).parents("tr").attr('data-gender');
    var regname = $(this).parents("tr").attr('data-regname');
    var dname = $(this).parents("tr").attr('data-dname');
    var sname = $(this).parents("tr").attr('data-sname');
    var cname = $(this).parents("tr").attr('data-cname');


    $(this).parents("tr").find("td:eq(0)").text(pname);
    $(this).parents("tr").find("td:eq(1)").text(preg);
    $(this).parents("tr").find("td:eq(2)").text(gender);
    $(this).parents("tr").find("td:eq(3)").text(regname);
    $(this).parents("tr").find("td:eq(4)").text(dname);
    $(this).parents("tr").find("td:eq(5)").text(sname);
    $(this).parents("tr").find("td:eq(6)").text(cname);



    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var pname = $(this).parents("tr").find("input[name='edit_pname']").val();
    var preg = $(this).parents("tr").find("input[name='edit_preg']").val();
    var gender = $(this).parents("tr").find("input[name='edit_gender']").val();
    var regname = $(this).parents("tr").find("input[name='edit_regname']").val();
    var dname = $(this).parents("tr").find("input[name='edit_dname']").val();
    var sname = $(this).parents("tr").find("input[name='edit_sname']").val();
    var dname = $(this).parents("tr").find("input[name='edit_cname']").val();

    $(this).parents("tr").find("td:eq(0)").text(pname);
    $(this).parents("tr").find("td:eq(1)").text(preg);
    $(this).parents("tr").find("td:eq(2)").text(gender);
    $(this).parents("tr").find("td:eq(3)").text(regname);
    $(this).parents("tr").find("td:eq(4)").text(dname);
    $(this).parents("tr").find("td:eq(5)").text(sname);
    $(this).parents("tr").find("td:eq(6)").text(cname);



    $(this).parents("tr").attr('data-sname', pname);
    $(this).parents("tr").attr('data-sreg', preg);
    $(this).parents("tr").attr('data-gender', gender);
    $(this).parents("tr").attr('data-regname', regname);
    $(this).parents("tr").attr('data-dname', dname);
    $(this).parents("tr").attr('data-sname', sname);
    $(this).parents("tr").attr('data-cname', cname);




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