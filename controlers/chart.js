"use strict";
const fs = require('fs');
const parse = require('csv-parse');
const file = './data/data.csv';

module.exports = {
  get : function(req, res){
    const categories = [];
    const serie = [];
    const answers = [];
    fs.createReadStream(file)
    .pipe(parse({
      delimiter: ';',
      columns: true,
      skip_empty_lines: true
    }))
    .on('data', function(csvrow) {
      const idx = categories.indexOf(csvrow.DATE);
      if(idx === -1){
        categories.push(csvrow.DATE);
        if(csvrow.ANSWER === 'yes') {
          serie.push(1);
        }
        else {
          serie.push(0);
        }
        answers.push(1);
      } else {
        if(csvrow.ANSWER === 'yes') {
          serie[idx] = serie[idx] +1;
        }
        if(csvrow.ANSWER !== '') {
          answers[idx] = answers[idx] +1;
        }
      }
    })
    .on('end',function() {
      const total = serie.map(function(item, idx){
        return (item/answers[idx])*100;
      });
      const response = {
        categories: categories,
        serie: total
      };
      res.status(200).json(response);
    });
  }
}
