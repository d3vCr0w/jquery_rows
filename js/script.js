$(function () {
  $('#contactForm').validate({
    rules: {
      name: {
        required: true,
      },
      document: {
        required: true,
      },
      dob: {
        required: true,
      },
      nota1: 'required',
      nota2: 'required',
      nota3: 'required'
    },
    messages: {
      name: {
        required: 'Por favor ingrese su nombre',
        lettersonly: 'El nombre debe contener solo letras',
      },
      dob: {
        required: 'Por favor ingrese sus fecha de nacimiento',
      },
      document: {
        required: 'Por favor ingrese su documento'
      },
      nota1: 'Por favor ingrese una nota',
      nota2: 'Por favor ingrese una nota',
      nota3: 'Por favor ingrese una nota',
    },
  });

  $('#sendBtn').on('click', function () {
    $('#contactForm').valid();
  });
});
