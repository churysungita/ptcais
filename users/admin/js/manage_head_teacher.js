$("form").submit(function(e) {
    e.preventDefault();
    var sname = $("input[name='sname']").val();
    var sreg = $("input[name='sreg']").val();
    var rname = $("input[name='rname']").val();
    var dname = $("input[name='dname']").val();
    var wname = $("input[name='wname']").val();
    var htname = $("input[name='htname']").val();



    $(".data-table tbody").append("<tr data-sname='" + sname + "' data-sreg='" + sreg + "' data-rname='" + rname + "' data-dname='" + dname + "' data-wname='" + wname + "' data-htname='" + htname + "' ><td>" + sname + "</td><td>" + sreg + "</td> <td>" + rname + "</td><td>" + dname + "</td><td>" + wname + "</td><td>" + htname + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='sname']").val('');
    $("input[name='sreg']").val('');
    $("input[name='rname']").val('');
    $("input[name='dname']").val('');
    $("input[name='wname']").val('');
    $("input[name='htname']").val('');
});

$("body").on("click", ".btn-delete", function() {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function() {

    var sname = $(this).parents("tr").attr('data-sname');
    var sreg = $(this).parents("tr").attr('data-sreg');
    var rname = $(this).parents("tr").attr('data-rname');
    var dname = $(this).parents("tr").attr('data-dname');
    var wname = $(this).parents("tr").attr('data-wname');
    var htname = $(this).parents("tr").attr('data-htname');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_sname" value="' + sname + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_sreg" value="' + sreg + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_rname" value="' + rname + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_dname" value="' + dname + '">');
    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_wname" value="' + wname + '">');
    $(this).parents("tr").find("td:eq(5)").html('<input name="edit_htname" value="' + htname + '">');

    $(this).parents("tr").find("td:eq(6)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function() {
    var sname = $(this).parents("tr").attr('data-sname');
    var sreg = $(this).parents("tr").attr('data-sreg');
    var rname = $(this).parents("tr").attr('data-rname');
    var dname = $(this).parents("tr").attr('data-dname');
    var wname = $(this).parents("tr").attr('data-wname');
    var htname = $(this).parents("tr").attr('data-htname');

    $(this).parents("tr").find("td:eq(0)").text(sname);
    $(this).parents("tr").find("td:eq(1)").text(sreg);
    $(this).parents("tr").find("td:eq(2)").text(rname);
    $(this).parents("tr").find("td:eq(3)").text(dname);
    $(this).parents("tr").find("td:eq(4)").text(wname);
    $(this).parents("tr").find("td:eq(5)").text(htname);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function() {
    var sname = $(this).parents("tr").find("input[name='edit_sname']").val();
    var sreg = $(this).parents("tr").find("input[name='edit_sreg']").val();
    var rname = $(this).parents("tr").find("input[name='edit_rname']").val();
    var dname = $(this).parents("tr").find("input[name='edit_dname']").val();
    var wname = $(this).parents("tr").find("input[name='edit_wname']").val();
    var htname = $(this).parents("tr").find("input[name='edit_htname']").val();


    $(this).parents("tr").find("td:eq(0)").text(sname);
    $(this).parents("tr").find("td:eq(1)").text(sreg);
    $(this).parents("tr").find("td:eq(2)").text(rname);
    $(this).parents("tr").find("td:eq(3)").text(dname);
    $(this).parents("tr").find("td:eq(4)").text(wname);
    $(this).parents("tr").find("td:eq(5)").text(htname);


    $(this).parents("tr").attr('data-sname', sname);
    $(this).parents("tr").attr('data-sreg', sreg);
    $(this).parents("tr").attr('data-rname', rname);
    $(this).parents("tr").attr('data-dname', dname);
    $(this).parents("tr").attr('data-wname', wname);
    $(this).parents("tr").attr('data-htname', htname);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});