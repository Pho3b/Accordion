"use strict";

function Accordion(options){
	
	//PROPERTIES
	this.container = document.getElementById(options.container);
	this.main_panel = document.createElement('section');
	this.main_panel_text;
	this.panel_text;
	this.panel_description;
	this.panel_block;
	this.panels_counter = 1;
	this.fragment = document.createDocumentFragment();						//Instantiating a document fragment

	
	//Appending text of the main panel
	this.main_panel_text = document.createElement('p');
	
	this.main_panel.appendChild(this.main_panel_text);
	this.main_panel_text.innerHTML = options.mainTitle;
	this.main_panel_text.classList += 'main_text';
	//Adding the ID for the main panel
	this.main_panel.setAttribute('id', 'panel_0');
	this.main_panel.className = 'main_panel';	
	//Appending the main panel to the container
	this.container.appendChild(this.main_panel);
	
	this.panels = options.panels;
	
	
	
	//METHODS
	this.createPanelsBlock = function (option) {
		
		for (let option in this.panels) {
			//Creating elements for panels
			this.panel_block = document.createElement('section');
			this.panel_text = document.createElement('p');
			this.panel_description = document.createElement('p');
			
			//Setting the inner HTML for panels
			this.panel_text.innerHTML = this.panels[option].title;
			this.panel_description.innerHTML = this.panels[option].description;
			
			//Adding classes and IDs to the panels elements
			this.panel_text.className = 'panel_text';
			this.panel_block.setAttribute('id', 'panel_' + this.panels_counter);
			this.panel_block.className += ('panel');						//Classes
			
			//Appending the created elements and building the actual panel block
			this.panel_block.appendChild(this.panel_text);
			this.container.appendChild(this.panel_block);
			
			//Appending to the fragment 
			this.fragment.appendChild(this.panel_block);
			
			//Incrementing the counter for the IDs
			this.panels_counter++;
		}
	};
	
	
	this.init = function () {
		
		this.createPanelsBlock();
		
		this.container.appendChild(this.fragment);
	}
	
	
	
	//Initializer(Da mettere nel costruttore)
	this.init();
}