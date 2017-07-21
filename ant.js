$(() => {
  generateTable(10, 10);
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
