let enterFlag = true;

      document.getElementById("mainRec").onclick = () => {
        if (enterFlag) {
          enterFlag = false;

          document.getElementById("mainRec").style.backgroundColor = "blue";

          class Box {
            constructor(width, height, letter) { this.width = width; this.height = height; this.letter = letter;}
            getWidth() {
              return this.width;
            }

            getHeight() {
              return this.height;
            }
          }
          let arr = ["A", "B", "C", "D", "X"];
          let _width = 0;
          let _height = 0;
          let flag = true;
          var devObj = null;

          let array = [15];
          let boxObj = null;
          for (let i = 0; i < 9; i++) {
            _width = 80 + i * 20;
            _height = 80 + i * 20;

            devObj = document.createElement("div");
            devObj.className = "box";
            boxObj = new Box(`${_width}px`, `${_height}px`,"red", `${arr[i % 4]}` );
            devObj.style.width = boxObj.getWidth();
            devObj.style.height = boxObj.getHeight();
            devObj.style.backgroundColor = "red";

            if (i == 0) {
              devObj.style.marginRight = "132px";
              flag = false;
            }
            if (i % 3 == 0 && flag == true) {
              devObj.style.marginRight = "0px";
            }
            if (i % 3 != 0 && i != 0) {
              devObj.style.marginRight = "132px";
            }

            let text = document.createElement("span");
            text.innerHTML = arr[i % 4];
            text.style.display = "none";
            devObj.appendChild(text);

            array[i] = devObj;

            document.getElementById("midlleWrapper").appendChild(devObj);
          }
          let last_obj = document.createElement("div");
          let last_text = document.createElement("span");
          last_obj.appendChild(last_text);
          array[14] = last_obj;
          let index = 14;

          array.forEach((element) => {
            element.onclick = () => {
              array[array.indexOf(element)].childNodes[0].style.display =
                "block";

              console.log(index);
              console.log(array.indexOf(element));
              console.log(array[index].childNodes[0].innerHTML);
              console.log(
                array[array.indexOf(element)].childNodes[0].innerHTML
              );

              if (
                index != array.indexOf(element) &&
                array[index].childNodes[0].innerHTML ==
                  array[array.indexOf(element)].childNodes[0].innerHTML
              ) {
                array[index].style.backgroundColor = array[
                  array.indexOf(element)
                ].style.backgroundColor = "green";
                array[index].onclick = array[array.indexOf(element)].onclick =
                  null;
              } else {
                if (array[index].style.backgroundColor != "green")
                  array[index].childNodes[0].style.display = "none";
              }
              index = array.indexOf(element);
            };
          });
        }
      };