// array inside another array is called multidimensional array. 
// simple table.
let ary = [
      ["Muhammad Shakir", "BSSE", "6th", "Morning"],
      ["Muhammad Haris", "BSSE", "6th", "Morning"],
      ["Wajid Hussain", "BSSE", "6th", "Morning"]
    ]

  document.write("<table border='1px' cellspacing='0'>");
    for (let a = 0; a < 4; a++) {
      document.write("<tr>")
      for (let b = 0; b < 4; b++) {
        document.write("<td>" + ary[a][b] + "</td>");
      document.write("</tr>")
      }
    }
  document.write("</table>")


// proper table.
    var ary = [
      ["Muhammad Shakir", "Front-end Developer"],
      ["Rehan Sattar", "Full stack developer"],
      ["Saad Pasta", "Software engineer"],
    ]
document.write("<table border='1px' cellspacing='0'>")
    for(let a = 0; a < ary.length; a++){
      document.write("<tr>")
      for(let b = 0; b < ary[a].length; b++){
        document.write("<td>" + ary[a][b] + "</td>")
      }
      document.write("</tr>")
    }
document.write("</table>")

