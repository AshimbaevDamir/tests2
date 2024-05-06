
document.body.addEventListener("click", (e) =>
{
  if (e.target.classList.contains("spoiler__btn"))
  {
    e.target.closest(".spoiler-wrap").classList.toggle("spoiler--open");
  }
})

function myFunction() {
  // Объявить переменные
  var input1, filter, table, tr, td1, i, txtValue;
  input1 = document.getElementById("myInputNumberOrName");
  filter = input1.value.toUpperCase();
  table = document.getElementById("MainTB");
  tr = table.getElementsByTagName("tr");

  // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    if (td1) {
      txtValue = td1.textContent || td1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
      
      else {
        tr[i].style.display = "none";
      }
    } 
     
  }
  
}

function myFunction1() {
  // Объявить переменные
  var input1, filter, table, tr, td1, i, txtValue;
  input1 = document.getElementById("myInputNumberOrName");
  filter = input1.value.toUpperCase();
  table = document.getElementById("MainTB");
  tr = table.getElementsByTagName("tr");

  // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[0];
    
    if (td1) {
      txtValue = td1.textContent || td1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
      
      else {
        tr[i].style.display = "none";
      }
    } 
     
  }
  
}

function myFunction2() {
  // Объявить переменные
  var input2, filter2, table, tr, td2, i, txtValue2;
  input2 = document.getElementById("myInputDateGet");
  filter2 = input2.value.toUpperCase();
  table = document.getElementById("MainTB");
  tr = table.getElementsByTagName("tr");

  // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
  for (i = 0; i < tr.length; i++) {
    td2 = tr[i].getElementsByTagName("td")[2];
    
    if (td2) {
      txtValue2 = td2.textContent || td2.innerText;
      if (txtValue2.toUpperCase().indexOf(filter2) > -1) {
        tr[i].style.display = "";
      } 
      
      else {
        tr[i].style.display = "none";
      }
    } 
     
  }
  
}


function myFunction3() {
  // Объявить переменные
  var input3, filter3, table, tr, td3, i, txtValue3;
  input3 = document.getElementById("myInputDateOut");
  filter3 = input3.value.toUpperCase();
  table = document.getElementById("MainTB");
  tr = table.getElementsByTagName("tr");

  // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
  for (i = 0; i < tr.length; i++) {
    td3 = tr[i].getElementsByTagName("td")[3];
    
    if (td3) {
      txtValue3 = td3.textContent || td3.innerText;
      if (txtValue3.toUpperCase().indexOf(filter3) > -1) {
        tr[i].style.display = "";
      } 
      
      else {
        tr[i].style.display = "none";
      }
    } 
     
  }
  
}