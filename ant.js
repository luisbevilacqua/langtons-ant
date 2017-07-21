$(() => {
  generateTable(100, 100);
  ant = new Ant(50,50);
  ant.start();
})

function generateTable(x, y) {
  $('body').append('<table></table>')
  for(i = 0; i < x; i++){
    $('table').append(`<tr class=table-row-${i}></tr>`)
    for(j = 0; j < x; j++){
      $(`.table-row-${i}`).append(`<td class="table-cell-${i}-${j} light"></td>`)
    }
  }
}

class Ant {
  ALLOWED_DIRECTIONS() { return ["up", "right", "down", "left"] }

  constructor(x = 0, y = 0, direction = "up"){
    this.positionX = x;
    this.positionY = y;
    this.direction = direction;
    this.printAnt();
  }

  start() {
    var _this = this;
    setInterval(function() { _this.step(); }, 10);
  }

  step() {
    var squareColor = this.currentSquareColor();
    this.paintSquare(squareColor);
    this.changeDirection(squareColor);
    this.move();
    this.printAnt();
  }

  printAnt() {
    $(`td`).removeClass('ant')
    $(`.table-cell-${this.positionX}-${this.positionY}`).addClass('ant');
  }

  currentSquareColor() {
    var classes = $(`.table-cell-${this.positionX}-${this.positionY}`).attr('class');
    if(classes.indexOf('light') > 0){
      return 'light';
    }
    else {
      return 'dark';
    }
  }

  paintSquare(squareColor){
    if(squareColor == 'light'){
      $(`.table-cell-${this.positionX}-${this.positionY}`).removeClass('light');
      $(`.table-cell-${this.positionX}-${this.positionY}`).addClass('dark');
    }
    else if(squareColor == 'dark'){
      $(`.table-cell-${this.positionX}-${this.positionY}`).removeClass('dark');
      $(`.table-cell-${this.positionX}-${this.positionY}`).addClass('light');
    }
  }

  changeDirection(squareColor) {
    var currentPositionIndex = this.ALLOWED_DIRECTIONS().indexOf(this.direction);
    var nextDirectionIndex
    if(squareColor == 'light'){
      nextDirectionIndex = currentPositionIndex + 1;
    }
    else {
      nextDirectionIndex = currentPositionIndex - 1;
    }
    if (nextDirectionIndex > this.ALLOWED_DIRECTIONS().length - 1) {
      nextDirectionIndex = 0;
    }
    else if (nextDirectionIndex < 0) {
      nextDirectionIndex = this.ALLOWED_DIRECTIONS().length - 1;
    }
    this.direction = this.ALLOWED_DIRECTIONS()[nextDirectionIndex];
  }

  move() {
    switch (this.direction) {
      case 'up':
        this.positionY++;
        break;
      case 'down':
        this.positionY--;
        break;
      case 'right':
        this.positionX++;
        break;
      case 'left':
        this.positionX--;
        break;
    }
  }
}
