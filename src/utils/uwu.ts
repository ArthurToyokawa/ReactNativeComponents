export default function uwuificador(text: string) {
  const replacements: { [key: string]: string } = {
    y: "nye",
    r: "w",
    o: "ow",
    p: "pw",
    s: "sh",
    g: "w",
    l: "w",
  };

  let returnStr = "";
  for (let i = 0; i < text.length; i++) {
    returnStr += replacements[text.charAt(i)] || text.charAt(i);
  }
  let addNum = returnStr.length;
  while (addNum > 4) {
    addNum = Math.floor(addNum / 2);
  }

  switch (addNum) {
    case 0: {
      returnStr += " ^-^";
      break;
    }
    case 1: {
      returnStr += " OwO";
      break;
    }
    case 2: {
      returnStr += " UwU";
      break;
    }
    case 3: {
      returnStr += " desu";
      break;
    }
    case 4: {
      returnStr += " nya";
      break;
    }
  }

  return returnStr;
}
