      function toggleCircuit(element) {
          if (element.classList.contains("on")) {
              element.classList.remove("on");
              element.classList.add("off");
          } else {
              element.classList.remove("off");
              element.classList.add("on");
          }
          updateCircuitCounts();
      }

      function updateCircuitCounts() {
          const rooms = ['sala_estar', 'quarto_principal', 'cozinha', 'quarto_hospedes', 'banheiro'];
          rooms.forEach(room => {
              const onCount = document.querySelectorAll(`.${room} .on`).length;
              const offCount = document.querySelectorAll(`.${room} .off`).length;
              document.getElementById(`${room}_on`).textContent = onCount;
              document.getElementById(`${room}_off`).textContent = offCount;
          });
      }

      function toggleAllCircuits(room) {
          const circuits = document.querySelectorAll(`.${room} .circuit`);
          circuits.forEach(circuit => {
              toggleCircuit(circuit);
          });
      }

      updateCircuitCounts();
       


  