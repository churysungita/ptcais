$("body").on("click ", "#btnExport ", function() {
    html2canvas($('#tblResults')[0], {
        onrendered: function(canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500,
                    pageSize: 'A4'


                }]
            };

            pdfMake.createPdf(docDefinition).download('student-ca.pdf', function() {
                alert('your pdf is done');
            });
        }
    });
});