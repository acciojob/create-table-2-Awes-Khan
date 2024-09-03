function createTable() {
    //Write your code here
	let rn = prompt("Input number of rows");
	let cn = prompt("Input number of columns");

	let table = document.getElementById("myTable");
	let r=0,c=0;
	while(r==rn){
		let tr = table.insertRow(r);
		for(let i=0; i<cn; i++){
		  tr.insertCell(i).innerHTML = "Row-"+r+" Column-"+i;
		}
		r++;
	}
	
  
}
