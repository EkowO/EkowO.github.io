var canvas_width = 400;
var canvas_hieght = 400;
var number_of_cols = 10;
var number_of_rows = 10;
var square_width = canvas_width/number_of_rows;
var square_hieght = canvas_hieght/number_of_cols;
var piece_width = square_width/4;
var piece_hieght = square_hieght/4;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function square(x, y, h, w, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, h, w);
}

function circle(x, y, w, h, color) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, 0, 10, 20);
    ctx.fill();
}

function draw_board(color1, color2){
    square(0, 0, 800, 800, color2)
    function rows_and_columns(x, y, xcor,){
        for (let ycor = 0; ycor < number_of_rows/2; ycor++) {
            for (let xcor = 0; xcor < number_of_cols/2; xcor++) {
                square(x, y, square_width, square_hieght, color1)
                x = x+square_width*2;
            }
            y = y+square_width*2;
            x = xcor
        }
    }
    rows_and_columns(0, 0, 0)
    rows_and_columns(square_hieght, square_hieght, square_hieght)
}

function pieces(){
    function piece_row(x, y, color){
        for (let xcor=0; xcor<5; xcor++) {
            circle(x, y, piece_width, piece_hieght, color)
            x = x+square_width*2
        }
    }
    piece_row(square_width/2, square_hieght/2, "black")
    piece_row(square_width*1.5, square_hieght*1.5, "black")
    piece_row(square_width/2, square_hieght*2.5, "black")
    piece_row(square_width/2, square_hieght*8.5, "white")
    piece_row(square_width*1.5, square_hieght*7.5, "white")
    piece_row(square_width*1.5, square_hieght*9.5, "white")
}
draw_board("red", "yellow")
pieces()