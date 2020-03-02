$(document).ready(function () {
    // Tooltip Initialization
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $('.input-group.date').datepicker({
        autoclose: true
    });
})