for (let i = 1; i <= 100; i++) {
  if(i % 15 === 0){
    document.write('BizzAppz');
  } else {
    document.write(i % 5 === 0 ? 'Appz' : (i % 3 === 0 ? 'Bizz' : i));
  }
  document.write('<br/>');
}