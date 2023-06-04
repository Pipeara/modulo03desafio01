function calcular() {
    const cantidad = document.querySelector('#cantidad').value;
    const precio = document.querySelector('#precio').innerHTML;
    const colorSelect = document.querySelector('#color');
    const color = colorSelect.options[colorSelect.selectedIndex].value;
  
    // Validar si la cantidad ingresada es un número positivo
    if (cantidad <= 0 || isNaN(cantidad)) {
      alert('Por favor, ingrese una cantidad válida que sea positiva.');
      return;
    }
  
    document.querySelector('#resumen_total').innerHTML = cantidad * precio;
    document.querySelector('#resumen_cantidad').innerHTML = cantidad;
    // se muestra cambio de color seleccionado //
    document.querySelector('#resumen_color').style.backgroundColor = color;
  }
  
  document.querySelector('#btn').addEventListener('click', calcular);
  