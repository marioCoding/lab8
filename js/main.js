// Session storage
  const btn = document.getElementById('btn1');
  const container1 = document.getElementById("counterSpace");
  btn.addEventListener('click', clickCounter);

  function clickCounter(e) {
    if (typeof Storage !== "undefined") {
      let count = sessionStorage.getItem('clickcount');
      if (count) {
        sessionStorage.setItem('clickcount', Number(count) + 1);
      } else {
        sessionStorage.setItem('clickcount', 1);
      }
  
      container1.innerHTML =
        `You have clicked the button ${sessionStorage.getItem('clickcount')} time(s).`;
    } else {
      container1.innerHTML =
        "Sorry, your browser does not support web storage.";
    }
  }

// Local storage
  const container2 = document.getElementById("nameSpace");
  document.getElementById("showName").addEventListener('click', e => {
    // Check if browser supports web storage
    if (typeof(Storage) !== "undefined") {
      // set item (store)
      localStorage.setItem("name", "Mario Salinas");
      // get item (retrieve)
      container2.innerHTML = localStorage.getItem("name");
    } else {
      container2.innerHTML = "Sorry, your browser does not support web storage.";
    }
  });

