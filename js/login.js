        class Login {
            constructor(user, tipdoc) {
                this.user = user;
                this.tipdoc = tipdoc;
            }
            static loginName(user) { // Creo <LI> menu y Añade MainHead=TIPO y #NOMBRE 
                 
                const lif = document.createElement('li');
                document.querySelector('ul').appendChild(lif);
				lif.innerHTML = `<a href="#cartillas">Farmacias</a>`;
				const lic = document.createElement('li');
				document.querySelector('ul').appendChild(lic);
         		lic.innerHTML = `<a href="#portfolio">Emergencias</a>`;
				const liuser = document.createElement('li');
				document.querySelector('ul').appendChild(liuser);
                liuser.innerHTML = `<a href>${user} <i class="fa fa-sign-out fa-fw"></i></a>`;
                
			}
        }
        
       class App {
            static showMenu (login){
            } 
           
            static showAlert (message, className){
               
               const div = document.createElement('div');
               div.className = `alert ${className}`;
               div.appendChild(document.createTextNode(message));
               const container = document.querySelector('.container');
               const form = document.querySelector('#login-div');
                
               // Get a reference to the parent element
                var parentDiv = form.parentNode;
               // Insert the new element into the DOM before sp2
                parentDiv.insertBefore(div, form); 
            }
           
           static efect (div){
                const divbloke = document.querySelector(`#${div}`);
                divbloke.classList.add('hide');
               document.querySelector(".alert").remove();
			  	 
            } 
        }
        //}
        
        class Ajax{
        constructor(url,metodo,callback,historial,selector,data) {
                this.url = url;
                this.metodo = metodo;
                this.callback = callback;
                this.historial = historial;
                this.selector = selector;
                this.data = data;
            }
    
        static ajax(url,metodo,callback,historial){
        let xhr = new XMLHttpRequest
        xhr.open(metodo,url)
        xhr.addEventListener("load",function(){
            if(xhr.status==200){
                if(historial){
                    window.location.hash = url.split(".")[2];
                    window.history.pushState({
                        url : url.split(".")[2],
                        template : xhr.response
                    },"",url.split(".")[0])
                    
                }
                callback(xhr.response)
            }
        })
        xhr.send()
    }  
    static render(selector,data){
            document.querySelector(selector).innerHTML = data;
        }
}


        
        
        document.querySelector('form').addEventListener('submit', e => {
                
                e.preventDefault();  
                    let user = document.getElementById('input').value;
                    let tipdoc = document.getElementById('TipDoc').value;                
                    //const login=new Login(user, tipdoc);
            
                    //const loginname = new Login(user);
                    //login.loginName();
                
                if (user !== '' && tipdoc !== '') { 
                    
                    //FLETCH A loginJSON!
                    
                   fetch ((`https://www.osseg.org.ar/loginJSON.php?tipdoc=${tipdoc}&nrodoc=${user}`), 
                          { method: 'GET', cache: 'reload' })
                    .then(function(datos) {
                        return datos.json();   
						     
                    })
                    .then(function(logeo) {
                          var long = logeo.length;
                          var i;
                       
                        if (logeo[0].apellido){
							Login.loginName(logeo[0].nombre+" "+logeo[0].apellido);
							App.efect ('team');

							
							}else{
								App.showAlert('Usuario NO VALIDO', 'error');
							}

                   })
                          
                    
                    
                    
                    
                }else{
                    App.showAlert('Por favor, rellene los campos', 'error');
                }
        });
        
        

            
