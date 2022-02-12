$(() => {
  const greatestAverageRecord = JSON.parse(
    window.localStorage.getItem('greatestRecord')
  );
  const lowestAverageRecord = JSON.parse(
    window.localStorage.getItem('lowestRecord')
  );

  console.log(greatestAverageRecord);

  $('#latabla tbody').append(`
        <tr class='bg-warning'>
            <td><img src='../${greatestAverageRecord.imgSource}' width='90' heigth='90'></img></td>
            <td class='document'>${greatestAverageRecord.document}</td>
            <td class='name'>${greatestAverageRecord.name}</td>
            <td class='date'>${greatestAverageRecord.date}</td>
            <td class='age'>${greatestAverageRecord.age}</td>
            <td class='grade1'>${greatestAverageRecord.grade1}</td>
            <td class='grade2'>${greatestAverageRecord.grade2}</td>
            <td class='grade3'>${greatestAverageRecord.grade3}</td>
            <td class='average'>${greatestAverageRecord.average}</td>
        </tr>
    `).append(`
        <tr class='bg-danger text-white'>
            <td><img src='../${lowestAverageRecord.imgSource}' width='90' heigth='90'></img></td>
            <td class='document'>${lowestAverageRecord.document}</td>
            <td class='name'>${lowestAverageRecord.name}</td>
            <td class='date'>${lowestAverageRecord.date}</td>
            <td class='age'>${lowestAverageRecord.age}</td>
            <td class='grade1'>${lowestAverageRecord.grade1}</td>
            <td class='grade2'>${lowestAverageRecord.grade2}</td>
            <td class='grade3'>${lowestAverageRecord.grade3}</td>
            <td class='average'>${lowestAverageRecord.average}</td>
        </tr>
    `);
});
