function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'gi'), correct);
  }