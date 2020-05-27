$(document).ready(function () {

    //Number 1
    $('#p1').append('<button id="btn1">Click Here</button>');
    $('#btn1').click(function () {
        alert('Hey there!');
    })

    //Number 2
    /* can also create element in jQuery using
    let btn2 = () */
    $('#btn2').click(function () {
        alert($('#text').val());
    })

    //Number 3
    $('#div2').mouseenter(function () {
        $('#div2').css('backgroundColor', 'blue');
    })
    $('#div2').mouseleave(function () {
        $('#div2').css('backgroundColor', 'initial');
    })

    //Number 4
    $('#p4').append('<p id="newp">This is random text</p>');
    $('#newp').click(function () {
        $('#newp').css('color', 'pink');
    })

    //Number 5 
    $('#p5').append('<div id="emptyDiv"></dvi>');
    $('#p5').append('<button id="nameBtn">My Name</button>');
    $('#nameBtn').click(function () {
        $('#emptyDiv').append('<span>Sydni</span>')
    })


    //Number 6 
    let friends = [
        "Tasha",
        "Autumn",
        "Cleveland",
        "Nikki",
        "Henry",
        "Brandon",
        "James",
        "Hafeeza",
        "Bryan",
        "Derrick",
    ];
    let i = 0;
    $('#btn6').click(function () {
        if (i < friends.length) {
            let friend = friends[i];
            $('#list').append('<li>' + friends[i] + '</li>')
            i++;
        }
    })

})


