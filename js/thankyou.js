$(document).ready(function(){
    $('#callbtn').on('click', function () {
        $('#dateBox').click(); //activate modal window
        $('#datepicker').datepicker();
    });

    $('input:checkbox:eq(0)').on("click", function(ev){
        $('input:checkbox:eq(1)').attr("checked", false);  
    });

    $('input:checkbox:eq(1)').on("click", function(ev){
        $('input:checkbox:eq(0)').attr("checked", false);  
    });

    $('#savebtn').on("click", function(){
        var appointment = $('#callback').serialize();
        $.post('', appointment).done(function(){
            $(this).attr("data-dismiss", "modal");
        });
    });

    emptyFields = 0;
    fields = document.querySelectorAll("#pinfo input");
    pinfo = document.getElementById('pinfo');

    mySubmit = function () {
        for (var i = 0; i < fields.length; i++) {
            if( fields[i].value == "" ) {
                fields[i].style.backgroundColor = 'pink';
                ++emptyFields;
            }
        }

        if (emptyFields > 0) {
            document.getElementById('alertBox').click();
            return false;
        }

        var data = $('#pinfo').serialize();
        console.log(data);
        $.post('', data);
    }
});