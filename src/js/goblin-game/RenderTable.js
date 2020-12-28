export default class RenderTable {
  static render(rows, cols) {
    const field = document.getElementsByClassName('field')[0];
    const fieldNew = document.createElement('div');
    fieldNew.className = 'field';

    for (let i = 0; i < rows; i += 1) {
      const row = document.createElement('div');
      row.className = 'row';

      for (let j = 0; j < cols; j += 1) {
        const hole = document.createElement('div');
        hole.className = 'hole';
        row.appendChild(hole);
      }
      fieldNew.appendChild(row);
    }
    field.replaceWith(fieldNew);
  }
}
