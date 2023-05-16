$(document).ready(function () {
    $("#birthday").datepicker();
});

$(document).ready(function () {
    var languages = ["ActionScript", "AppleScript", "Asp",
        "JavaScript", "Lisp", "Perl",
        "PHP", "Python", "Java", "C#"];

    $("#language").autocomplete({
        source: languages
    });
});

