$(function () {
  $('#contactForm').validate({
    rules: {
      name: {
        required: true,
        lettersonly: true,
      },
      document: {
        required: true,
        number: true,
        minlength: 8,
        maxlength: 12,
      },
      dob: {
        required: true,
        date: true,
      },
      nota1: {
        required: true,
        min: 0.0,
        max: 5.0,
      },
      nota2: {
        required: true,
        min: 0.0,
        max: 5.0,
      },
      nota3: {
        required: true,
        min: 0.0,
        max: 5.0,
      },
    },
    messages: {
      name: {
        required: 'Por favor ingrese su nombre',
        lettersonly: 'El nombre debe contener solo letras',
      },
      dob: {
        required: 'Por favor ingrese su fecha de nacimiento',
      },
      document: {
        required: 'Por favor ingrese su documento',
        digits: 'Debe ingresar solo digitos',
        minlength: 'Por favor ingrese un documento de mínimo 8 dígitos',
        maxlength: 'Por favor ingrese un documento de máximo 12 dígitos',
      },
      nota1: {
        required: 'Por favor ingrese una nota',
        min: 'Por favor ingrese una nota mayor a 0.0',
        max: 'Por favor ingrese una nota menor a 5.0',
      },
      nota2: {
        required: 'Por favor ingrese una nota',
        min: 'Por favor ingrese una nota mayor a 0.0',
        max: 'Por favor ingrese una nota menor a 5.0',
      },
      nota3: {
        required: 'Por favor ingrese una nota',
        min: 'Por favor ingrese una nota mayor a 0.0',
        max: 'Por favor ingrese una nota menor a 5.0',
      },
    },
  });

  $('#registerBtn').on('click', function () {
    if ($('#contactForm').valid()) {
      const document = $('#document').val();
      const name = $('#name').val();
      const age = '';
      const nota1 = $('#nota1').val();
      const nota2 = $('#nota2').val();
      const nota3 = $('#nota3').val();

      const average =
        (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

      $('#latabla tbody').append(`
        <tr>
          <td>${document}</td>
          <td>${name}</td>
          <td>${age}</td>
          <td>${nota1}</td>
          <td>${nota2}</td>
          <td>${nota3}</td>
          <td>${average}</td>
        </tr>
      `);
    }
  });
});
