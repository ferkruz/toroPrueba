var menu = function() { 

	fetch (("https://www.osseg.org.ar/toro/pizzas.json"), { method: 'GET', cache: 'reload' })
		.then(function(datos) {
			return datos.json(); 							 
				 
		})
		.then(function(menu) {		
			  var long = menu.pizza.length;
			  var i;
				 for (i = 0; i < long; i++) { 				 
				 
				    var original = document.getElementById('boxmenu');
    				var clone = original.cloneNode(true); 
    				clone.id = "boxmenu"+i;
				 	original.parentNode.appendChild(clone);
				 
				 	const pizza= document.getElementById('pizza');
				 	pizza.textContent= menu.pizza[i].id;
	
					const ul = document.createElement('ul');
					document.querySelector("#pizza").appendChild(ul);
					ul.id = "ingredientes"+i;
					
					let pizzaprecio= 0;
						
				 	for(j=0; j < menu.pizza[i].ingredientes.length; j++){
						
						const li = document.createElement('li');
						li.textContent = menu.pizza[i].ingredientes[j].name+" (precio:"+menu.pizza[i].ingredientes[j].precio+")";						
						li.id = menu.pizza[i].ingredientes[j].name; 
						li.setAttribute('data-precio', parseFloat(menu.pizza[i].ingredientes[j].precio));
						pizzaprecio= pizzaprecio+parseFloat(menu.pizza[i].ingredientes[j].precio);	
						document.querySelector("#ingredientes"+i).appendChild(li);	
						
					/*li.addEventListener('click', e => {
							event.preventDefault();	
							alert (li);
							pizzaprecio=pizzaprecio-parseFloat(li.getAttribute('data-precio'));
							li.remove();
							h4.textContent = "PRECIO: "+pizzaprecio;
							
							/**document.getElementById(li.id).addEventListener('click', e => {
							event.preventDefault();	
							pizzaprecio=pizzaprecio-parseFloat(document.getElementById(li.id).getAttribute('data-precio'));
							document.getElementById(li.id).remove();
							h4.textContent = "PRECIO: "+pizzaprecio;*/
							
							
					//});
					
				 }
				 const h4 = document.createElement('h4');
				 pizzaprecio=pizzaprecio+Math.floor(pizzaprecio*50)/100;
				 h4.textContent = "PRECIO: "+pizzaprecio;
				 document.querySelector("#ingredientes"+i).appendChild(h4);	
			  }
			 document.getElementById("boxmenu"+0).remove();  
		}) 
		
}();




var ingredientes = function() { 

	document.querySelector('#pzacard').style.display = "none";

	fetch (("https://www.osseg.org.ar/toro/ingredientes.json"), { method: 'GET', cache: 'reload' })
		.then(function(datos) {
			return datos.json(); 							 
				 
		})
		.then(function(pizza) {
			const opc = document.createElement('option');
				opc.textContent = 'Seleccione Ingrediente'; 
				opc.value = ''; 
				document.querySelector("#ing").appendChild(opc); 
			
			  var long = pizza.ingredientes.length;
			  var i;
				 for (i = 0; i < long; i++) {  
					const opc = document.createElement('option');
					opc.textContent = pizza.ingredientes[i].name+" (precio:"+pizza.ingredientes[i].precio+")";
					opc.value = pizza.ingredientes[i].name; 
					opc.setAttribute('data-precio', parseFloat(pizza.ingredientes[i].precio)); 									
					document.querySelector("#ing").appendChild(opc);	
				 }
		}) 
		
}();
 

class agusto{
  constructor(precio, ingred, nuevoIngre){
	  this.precio = 0;
	  this.ingred = [];
	  this.nuevoIngre = [];
	 document.querySelector('#ing_ok').addEventListener("click", e => {
		e.preventDefault();		
		this.gustos();
		document.querySelector('#pzacard').style.display = "block";					
	}); 		  
     document.querySelector('#env').addEventListener('click', e => {
		event.preventDefault();	
        	
		var longPed = this.ingred.length;
		var x;
		for (x = 0; x < longPed; x++) {  
				const pedidoPizza = document.createElement('h2');
				pedidoPizza.textContent = this.ingred[x];
				document.querySelector("#pedido").appendChild(pedidoPizza);
			 }	
    });
  }


  gustos(){ 
		const li = document.createElement('li');
		li.id = ing.value;	
		const a = document.createElement('a');
		a.name=parseFloat(ing.options[ing.selectedIndex].getAttribute('data-precio'));
		this.precio = this.precio+parseFloat(ing.options[ing.selectedIndex].getAttribute('data-precio'));	
						
		a.textContent = ing.value;				
		a.href = ing.value;			
		
		this.nuevoIngre = this.ingred.push(ing.value);
							
		document.querySelector("#ingrok").appendChild(li);		
		li.appendChild(a);	
		
		a.addEventListener('click', e => {
			event.preventDefault();	
			this.precio=this.precio-a.name;
			
			var pos = this.ingred.indexOf(ing.value);
			var elementoEliminado = this.ingred.splice(pos);
			
			document.getElementById(a.textContent).remove();	
		});	
	  }
}

new agusto();


 
 
 
 
 