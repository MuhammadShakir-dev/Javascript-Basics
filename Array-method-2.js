// let's practice a new way to create arrays in javascript.

  let ary = new Array(3);

      for (let g = 0; g < 3; g++) {
        ary[g] = prompt("Enter a value : ");
      }

      document.write("<ul>");
      for (let a = 0; a < 3; a++) {
        document.write("<li>" + ary[a] + "</li>");
      }

      document.write("</ul>");
