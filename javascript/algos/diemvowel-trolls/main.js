function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const _str = str.split('');
    
    for(let i = 0; i < _str.length; i++) {
      if (vowels.includes(_str[i].toLowerCase())) {
        _str[i] = '';
      }
    }
    return _str.join('');
  }