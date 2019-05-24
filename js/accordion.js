"use strict";

function Accordion(options){
	
	//PROPERTIES
	this.fragment = document.createDocumentFragment();						//Instantiating a document fragment
	this.container = document.getElementById(options.container);
	this.main_accordion = document.createElement('section');
	this.main_accordion_text;
	this.accordion_text;
	this.accordion_description;
	this.accordion_block;
	this.accordion_counter = 1;
	this.accordion_icon;
	this.content;

	
	//Appending text of the main panel
	this.main_accordion_text = document.createElement('p');
	
	this.main_accordion.appendChild(this.main_accordion_text);
	this.main_accordion_text.innerHTML = options.mainTitle;
	this.main_accordion_text.classList += 'main_text';
	//Adding the ID for the main panel
	this.main_accordion.setAttribute('id', 'panel_0');
	this.main_accordion.className = 'main_accordion';	
	//Appending the main panel to the container
	this.container.appendChild(this.main_accordion);
	
	this.panels = options.panels;
	
	
	
	//METHODS
	this.createPanelsBlock = function (option) {
		
		for (let option in this.panels) {
			//Creating node elements for panels
			this.accordion_block = document.createElement('section');
			this.accordion_text = document.createElement('p');
			this.accordion_description = document.createElement('p');
			this.accordion_icon = document.createElement('i');
			
			//Setting the inner HTML for panels
			this.accordion_text.innerHTML = this.panels[option].title;
			this.accordion_description.innerHTML = this.panels[option].description;
			this.accordion_icon.innerHTML = 'expand_more';
			
			//Adding classes and IDs to the panels elements
			this.accordion_text.className = 'accordion_text';
			this.accordion_block.setAttribute('id', 'panel_' + this.accordion_counter);
			this.accordion_block.className = 'accordion';					
			this.accordion_icon.className = 'material-icons md-26';
				
			
			
			
			//Appending the created elements and building the actual panel block
			this.accordion_text.appendChild(this.accordion_icon);
			this.accordion_block.appendChild(this.accordion_text);
			//this.container.appendChild(this.accordion_block);
			
			//Appending to the fragment 
			this.fragment.appendChild(this.accordion_block);
			
			//Incrementing the counter for the IDs
			this.accordion_counter++;
		}
	};
	
	
	this.init = function () {
		
		this.createPanelsBlock();
		
		this.container.appendChild(this.fragment);
	}
	
	
	
	//Initializer(Da mettere nel costruttore)
	this.init();
}