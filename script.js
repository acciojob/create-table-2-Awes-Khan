  function createTable() {
	let rn = prompt("Input number of rows");
	let cn = prompt("Input number of columns");
	let table = document.getElementById("myTable");
	let r=0,c=0;
	while(r!=rn){
		 let tr = table.insertRow(r);
		 for(let i=0; i<cn; i++){
		   tr.insertCell(i).innerHTML = "Row-"+r+" Column-"+i;
		 }
		//const tr = document.createElement('tr');
		//for(let i=0; i<cn; i++){
		//	const td = document.createElement('td');
		//    td.textContent = "Row-"+r+" Column-"+i;
		//    newRow.appendChild(td);	
		//}
		//table.appendChild(tr);

		r++;
	}
}