//your code here
let nameInput = document.getElementById('item-name-input');
let priceInput = document.getElementById('item-price-input');
let button = document.getElementById('add');
let table = document.getElementById('myTable');
let rowIndex = 1;

button.addEventListener('click', function(){
	
	let tablebody = table.getElementsByTagName('tbody')[0];

	if(!tablebody)
	{
		tableBody = document.createElement('tbody');
		table.appendChild(tableBody);
	}

	let newRow = tablebody.insertRow(rowIndex);
	rowIndex++;

	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);

	

	cell1.innerHTML = nameInput.value;
	cell2.innerHTML = priceInput.value;

	nameInput.value = '';
	priceInput.value = '';

grandSum();
	
});

function grandSum(){
	
	let sum = 0;

	let tableBody = table.getElementsByTagName('tbody')[0];

	if(tableBody)
	{
		let rows = tableBody.getElementsByTagName('tr');

		for(let i=0; i<rows.length; i++)
			{
				let cells = rows[i].getElementsByTagName('td');
				let priceCell = cells[1];

				sum+= parseFloat(priceCell.innerHTML);
			}
	}

	
		 let h3Element = document.getElementById('total');

    
		h3Element.innerHTML = 'Grand Total is ' + sum.toFixed(2);
	
	
}
