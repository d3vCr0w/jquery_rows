function getDocument() {
  min = Math.ceil(10000000);
  max = Math.floor(9999999999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ramdomNumberFloat(min, max) {
  return (Math.random() * (max - min) + 1).toFixed(1);
}

function getRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

$(function () {
  const availableStudentNumbers = [];
  do {
    const randomNumber = Math.floor(Math.random() * 20) + 1;

    if (!availableStudentNumbers.includes(randomNumber)) {
      availableStudentNumbers.push(randomNumber);
    }
  } while (availableStudentNumbers.length < 20);

  $('#btnGenerar').on('click', () => {
    if (availableStudentNumbers.length > 0) {
      const document = getDocument();
      const studentNumber = availableStudentNumbers.shift();
      const name = `Estudiante ${studentNumber}`;
      const date = getRandomDate(new Date(1980, 1, 1), new Date(2005, 1, 1));
      const grade1 = ramdomNumberFloat(0, 4);
      const grade2 = ramdomNumberFloat(0, 4);
      const grade3 = ramdomNumberFloat(0, 4);
      const average = (
        (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)) /
        3
      ).toFixed(1);
      const imgSource =
        studentNumber % 2 === 0
          ? './assets/images/harold.png'
          : './assets/images/thinking.png';
      const age = new Date().getFullYear() - new Date(date).getFullYear();

      $('#latabla tbody').append(`
        <tr>
          <td><img src='${imgSource}' width='90' heigth='90'></img></td>
          <td class='document'>${document}</td>
          <td class='name'>${name}</td>
          <td class='date'>${date.toISOString().split('T')[0]}</td>
          <td class='age'>${age}</td>
          <td class='grade1'>${grade1}</td>
          <td class='grade2'>${grade2}</td>
          <td class='grade3'>${grade3}</td>
          <td class='average'>${average}</td>
        </tr>
      `);
    } else {
      swal.fire({
        title: 'Alerta!',
        text: 'Solo hay 20 estudiantes disponibles.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  });

  $('#btnResaltar').on('click', () => {
    if ($('#latabla tbody tr').length === 0) {
      swal.fire({
        title: 'Mensaje',
        text: 'No hay registros para resaltar.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
    $('#latabla tbody tr').each((index, row) => {
      const average = +$(row).find('.average').text();
      if (average < 3.0) {
        $(row).addClass('bg-danger');
      } else if (average >= 3.5) {
        $(row).addClass('bg-success');
      }
    });
  });

  $('#btnMostrar').on('click', () => {
    if ($('#latabla tbody tr').length < 2) {
      swal.fire({
        title: 'Mensaje',
        text: 'Se requieren al menos dos registros generados para que funciona la opción Mostrar Registros.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
    const greatestAverageRecord = {
      row: $('.average:first').parent(),
      average: +$('.average:first').text(),
    };
    const lowestAverageRecord = {
      row: $('.average:first').parent(),
      average: +$('.average:first').text(),
    };

    $('#latabla tbody tr').each((index, row) => {
      const average = +$(row).find('.average').text();
      if (average > greatestAverageRecord.average) {
        greatestAverageRecord.row = $(row);
        greatestAverageRecord.average = average;
      }
      if (average < lowestAverageRecord.average) {
        lowestAverageRecord.row = $(row);
        lowestAverageRecord.average = average;
      }
    });

    localStorage.setItem(
      'greatestRecord',
      JSON.stringify({
        imgSource: greatestAverageRecord.row.find('img').attr('src'),
        document: greatestAverageRecord.row.find('.document').text(),
        name: greatestAverageRecord.row.find('.name').text(),
        date: greatestAverageRecord.row.find('.date').text(),
        age: greatestAverageRecord.row.find('.age').text(),
        grade1: greatestAverageRecord.row.find('.grade1').text(),
        grade2: greatestAverageRecord.row.find('.grade2').text(),
        grade3: greatestAverageRecord.row.find('.grade3').text(),
        average: greatestAverageRecord.row.find('.average').text(),
      })
    );

    localStorage.setItem(
      'lowestRecord',
      JSON.stringify({
        imgSource: lowestAverageRecord.row.find('img').attr('src'),
        document: lowestAverageRecord.row.find('.document').text(),
        name: lowestAverageRecord.row.find('.name').text(),
        date: lowestAverageRecord.row.find('.date').text(),
        age: lowestAverageRecord.row.find('.age').text(),
        grade1: lowestAverageRecord.row.find('.grade1').text(),
        grade2: lowestAverageRecord.row.find('.grade2').text(),
        grade3: lowestAverageRecord.row.find('.grade3').text(),
        average: lowestAverageRecord.row.find('.average').text(),
      })
    );

    window.location.href = `views/results.html`;
  });
});
