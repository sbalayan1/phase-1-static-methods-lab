class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let excludedWords = {
      'the': 'the', 
      'a': 'a', 
      'an': 'an', 
      'but': 'but', 
      'of': 'of', 
      'and': 'and', 
      'for': 'for', 
      'at': 'at', 
      'by': 'by', 
      'from': 'from'}

    let splitString = string.split(' ')
    for (let i = 0; i < splitString.length; i++) {
      if (i == 0) {
        splitString[0] = this.capitalize(splitString[0])
      } else {
        if (excludedWords[splitString[i]]) {
          splitString[i] = excludedWords[splitString[i]]
        } else {
          splitString[i] = this.capitalize(splitString[i])
        }
      }
    }

    return splitString.join(' ')
  }
}