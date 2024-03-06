export const isHexColor = (str:string) => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str);
}

export const isRGBColor = (str:string) => {
  return /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*(0|1|0\.\d+|1\.0*))?\)$/.test(str);
  // return /^rgba?\((\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,){2}\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*(0|1|0\.\d+|1\.0*)\)$/.test(str);
}

export const hexToRGBA = (hex:string, alpha:number) => {
  var r = parseInt(hex.substring(1, 3), 16);
  var g = parseInt(hex.substring(3, 5), 16);
  var b = parseInt(hex.substring(5, 7), 16);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}

export const extractRGBANumbers = (str:string) => {
  const match = isRGBColor(str)
  if (match) {
    const numbers = str
      .replace(/rgba?\(/, '')
      .replace(')', '')
      .split(',')
      .map((val) => parseFloat(val.trim()));
    return numbers;
  } else {
    return null;
  }
}


