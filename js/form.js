const openFormBtn = document.querySelector('#open-form-btn');
const formPopup = document.querySelector('#form-popup');
const OperationOpenFormBtn = document.querySelector('.addOp');
const OperationFormPopup = document.querySelector('#Operationform-popup');

openFormBtn.addEventListener('click', function() {
  formPopup.classList.add('show');
});

window.onclick = function(event) {
    if (event.target == formPopup) {
        formPopup.classList.remove('show');
    }
  };

function AddOpList(){
    OperationFormPopup.classList.add('show');
}
  
  
  window.onclick = function(event) {
      if (event.target == OperationFormPopup) {
        OperationFormPopup.classList.remove('show');
      };
      if (event.target == formPopup) {
        formPopup.classList.remove('show');
    }
    };
  




  function addData() { 
    // Get input values 
    let number = 
        document.getElementById("numberInput").value; 
    let costumer = 
        document.getElementById("CostumerInput").value; 
    let date1 = 
        document.getElementById("Date1Input").value; 
    let date2 = 
        document.getElementById("Date2Input").value; 
    
    // Get the table and insert a new row at the end 
    let table = document.getElementById("MainTB"); 
    let opId = 'OpNameInput' + number;
    let newRow = table.insertRow(1);
    newRow.classList.add('String');
    // Insert data into cells of the new row 
    newRow.insertCell(0).innerHTML = `<div class="spoiler-wrap"> 
    <div class="spoiler__btn">` + number + `<p class="CostumerName">` + costumer + `</p></span> </div> 
    
    <div class="spoiler-content">
    <hr>
    <ul> 
          <li class="Operation">
            <table class="OpRow" id = "`+ number + `">
              
              
                     
            </table>
            
          </li>
          <li>
            <div id="OperationformContainer"> 
            <label for="OpNameInput"> 
                + Добавить операцию: 
            </label> 
            <input type="text" 
                   id="`+opId+`"
                   placeholder="Операция">
            <br>
            <button onclick="addToList(this.id)" id="Btn`+number+`"> 
                  Добавить 
            </button>
            
            </div>
          </li>
          
          </ul> 
        </div>
        </div>`;
        
    newRow.insertCell(1).innerHTML = `<select name="Status" class="Status">
    <option value="Got">Согласование</option>
    <option value="InWork">В работе</option>
  </select>`;
    newRow.insertCell(2).innerHTML = date1; 
    newRow.insertCell(3).innerHTML = date2; 
    newRow.insertCell(4).innerHTML = 
        `<button onclick="editData(this)" class="OpEdit1">✓</button>
        <button onclick="deleteData(this)" class="OpDelete1">✕</button>`; 
    
    // Clear input fields 
    clearInputs(); 

} 

   
    function editData(button) { 
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;   
        // Get the parent row of the clicked button 
        let row = button.parentNode.parentNode; 
        
        // Get the cells within the row 
        
        let DateCell = row.cells[3]; 
        let ReadyCell = row.cells[1];
        // Prompt the user to enter updated values 
       
        let DateInput = 
            today; 
        let ReadyInput = 'Отгружено';
        // Update the cell contents with the new values 
        
        DateCell.innerHTML = DateInput; 
        ReadyCell.innerHTML = `<span class="CReady">`+ReadyInput+`</span>`; 
    } 
     
function deleteData(button) { 
    let row = button.parentNode.parentNode; 
    if (prompt("Вы действительно хотите удалить запись? Введите пароль") =='1111'){
        row.parentNode.removeChild(row);
     } else (alert("Неверный пароль"))
    // Get the parent row of the clicked button 
   

    // Remove the row from the table 
     
} 



 
function clearInputs() { 
    
    // Clear input fields 
    document.getElementById("numberInput").value = ""; 
    document.getElementById("CostumerInput").value = ""; 
    document.getElementById("Date1Input").value = ""; 
    document.getElementById("Date2Input").value = ""; 
} 




function OpReadyData(checkbox) { 
        
        // Get the parent row of the clicked button 
        let OpReadyrow = checkbox.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; 
        
        // Get the cells within the row 
        let ChkBoxL = OpReadyrow.querySelectorAll('input[type=checkbox]');
        var array = []
        for (var i = 0; i < ChkBoxL.length; i++) {
            array.push(ChkBoxL[i].value)
          };
        
        var checkboxes = OpReadyrow.querySelectorAll('input[type=checkbox]:checked');
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
          }
        let OpReadyrowCell = OpReadyrow.cells[1];
        // Prompt the user to enter updated values 
       
        
        let OpReadyrowInput = 'Готово';
        // Update the cell contents with the new values 
        if ( checkboxes.length == ChkBoxL.length){
            OpReadyrowCell.innerHTML = `<span class="CReady">`+OpReadyrowInput+`</span>`;
        } else {
            OpReadyrowCell.innerHTML =`<select name="Status" class="Status">
            <option value="Got">Согласование</option>
            <option value="InWork">В работе</option>
          </select>`;
        }
        
         
    } 










function addToList(clicked_id) { 

    let BtnId = clicked_id;
    let TableId = BtnId.slice(3);
    // Get input values 
    let OpName = 
        document.getElementById('OpNameInput'+TableId).value; 
        let OpTable = document.getElementById(TableId); 
   
    // Get the table and insert a new row at the end 
    let OpNewRow = OpTable.insertRow(OpTable.rows.length);
    OpNewRow.classList.add('OpString');
    // Insert data into cells of the new row 
    OpNewRow.insertCell(0).innerHTML = `<span>` + OpName + `</span>`;
    OpNewRow.insertCell(1).innerHTML = `<p class="Employe">Исп.</p>`;
    OpNewRow.insertCell(2).innerHTML = `<p class="Date">Дата</p>`;
    OpNewRow.insertCell(3).innerHTML = `<input type="checkbox" onclick="OpReadyData(this);OpEditData(this) " class="OpEdit"/>`;
    OpNewRow.insertCell(4).innerHTML = `<button onclick="OpdeleteData(this)" class="OpDelete">✕</button>  `;
    // Clear input fields 
    OpClearInputs(); 
    function OpClearInputs() { 
    
        // Clear input fields 
        document.getElementById('OpNameInput'+TableId).value = ""; 
       
    } 
} 

function OpEditData(button) { 
    
    var OpToday = new Date();
        var dd = String(OpToday.getDate()).padStart(2, '0');
        var mm = String(OpToday.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = OpToday.getFullYear();
        var yy = yyyy.toString().substring(2);

        OpToday = dd + '.' + mm + '.' + yy;   
        // Get the parent row of the clicked button 
        let OpRow = button.parentNode.parentNode; 
        
        // Get the cells within the row 
        
        let OpEmpCell = OpRow.cells[1];

        let OpReadyCell = OpRow.cells[2];
        // Prompt the user to enter updated values 
       

        let OpReadyInput = OpToday;
        // Update the cell contents with the new values 
        OpEmpCell.innerHTML = `Ашимбаев Д.`;
        OpReadyCell.innerHTML = OpReadyInput;
        OpReadyCell.classList.add('Date');
        OpEmpCell.classList.add('Employe');

        
} 

function OpdeleteData(button) { 
   
        let OpRow = button.parentNode.parentNode; 
        if (prompt("Вы действительно хотите удалить запись? Введите пароль") =='1111'){
            OpRow.parentNode.removeChild(OpRow);
         } else (alert("Неверный пароль"))
    // Get the parent row of the clicked button 

    // Remove the row from the table 
} 

function OpClearInputs() { 
    
    // Clear input fields 
    document.getElementById('OpNameInput'+TableId).value = ""; 
   
} 


