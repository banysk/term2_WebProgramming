        function circle_area(radius){
          return Math.PI * (radius**2);
        }

        function btn1(){
          r = document.getElementById("radius").value;
          if (r <= 0){
            alert("Неверное значение!");
          }else{
            after = document.getElementById("after1").value;
            document.getElementById("result1").value = circle_area(r).toFixed(after);
          }
        }

        function btn2(){
          var x = document.getElementById("x").value;
          var result = 0;
          var step; 
          for (i = 0; i < 20; i++){
            step = x / (1 + (i * 2));
            result += step;
          }
          after = document.getElementById("after2").value;
          document.getElementById("result2").value = result.toFixed(after);
        }

        function btn3(){
          var data = document.getElementsByClassName("cell");
          for (i = 1; i < 4; i++){
            for (j = 0; j < 3; j++){
              data[(3*i) + j].value -= data[j].value;
            }
          }
        }

        function getRandomInt(min = Number(document.getElementById("min").value), max = Number(document.getElementById("max").value)){
          return min + Math.floor(Math.random()*(max-min));
        }

        function btn4(){
          document.getElementById("result3").value = getRandomInt();
        }

        function getArray(n){
          var array = [];
          for (i = 0; i < n; i++){
            array.push(getRandomInt());
          }
          return array;
        }

        function getResultArray(a){
          if (a.length > 0){
            var s = [];
            var c = [];
            var b = [];
            var q = a[getRandomInt(0, a.length)];
            for (i = 0; i < a.length; i++){
              if (a[i] < q){
                s.push(a[i]);
              }
              if (a[i] == q){
                c.push(a[i]);
              }
              if (a[i] > q){
                b.push(a[i]);
              }
            }
            var a_new = [];
            if (s.length > 0) a_new = a_new.concat(getResultArray(s));
            a_new = a_new.concat(c);
            if (b.length > 0) a_new = a_new.concat(getResultArray(b));
            return a_new;
          }
        }

        function matrix_from(array, n){
          var c = 0;
          var matrix = [];
          for (i = 0; i < n; i++){
            matrix.push([]);
          }

          for (row = 0; row < n; row++){

            if (row % 2 == 0){
              for (i = n - 1; i >= 0; i--){
              matrix[i][row] = array[c++];
              }
            }
              
            if (row % 2 == 1){
              for (i = 0; i < n; i++){
              matrix[i][row] = array[c++];
              }
            }
          }
          return matrix;
        }