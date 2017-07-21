$(() => {
  generateTable(10, 10);
  ant = new Ant(5,5);
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
  // ALLOWED_DIRECTIONS = ["up", "right", "down", "left"]

  constructor(x = 0, y = 0, direction = "up"){
    this.positionX = x;
    this.positionY = y;
    this.direction = direction;
    this.printAnt();
  }

  printAnt() {
    console.log(`table-cell-${this.positionX}-${this.positionY}`)
    $(`.table-cell-${this.positionX}-${this.positionY}`).addClass('ant')
  }
}
