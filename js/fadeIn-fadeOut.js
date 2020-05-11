function fade() {
  var idblock = document.getElementById('another-products');

    if(idblock.style.display=='none') {
      idblock.style.display = 'block';
  } else {
    idblock.style.display = 'none';
  }
  return false;
}