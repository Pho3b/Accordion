"use strict";

class Accordion {
	
	//PROPERTIES
	constructor(options) {
		this.fragment = document.createDocumentFragment();						//Instantiating a document fragment
		this.container = document.getElementById(options.container);
		this.main_accordion = document.createElement('section');
		this.main_accordion_title;
		this.accordion_title;
		this.accordion_subtitle;
		this.accordion_block;
		this.accordion_icon;
		this.content;
		this.accordion_counter = 1;	//Setting it to 1 to skip the main accordion
		
		//Appending text of the main panel
		this.main_accordion_title = document.createElement('p');
		
		this.main_accordion.appendChild(this.main_accordion_title);
		this.main_accordion_title.innerHTML = options.mainTitle;
		this.main_accordion_title.classList += 'main_text';
		//Adding the ID for the main panel
		this.main_accordion.setAttribute('id', 'panel_0');
		this.main_accordion.className = 'main_accordion';	
		//Appending the main panel to the container
		this.container.appendChild(this.main_accordion);
		
		this.panels = options.panels;
		
		
		//Initializer(Da mettere nel costruttore)
		this.init();
	}
	

	
	//METHODS
	createPanelsBlock(option) {
		
		for (let option in this.panels) {
			//Creating node elements for panels
			this.accordion_block = document.createElement('section');
			this.accordion_title = document.createElement('p');
			this.accordion_subtitle = document.createElement('p');
			this.accordion_icon = document.createElement('i');
			this.content = document.createElement('div');
			
			//Setting the inner HTML for panels
			this.accordion_title.innerHTML = this.panels[option].title;
			this.accordion_subtitle.innerHTML = this.panels[option].subtitle;
			this.accordion_icon.innerHTML = 'expand_more';
			this.content.innerHTML = this.panels[option].content;
			
			//Adding classes and IDs to the panels elements
			this.accordion_title.className = 'accordion_title';
			this.accordion_block.className = 'accordion';
			this.accordion_block.setAttribute('data-counter', this.accordion_counter);			
			this.accordion_icon.className = 'material-icons md-26';
			this.accordion_subtitle.className = 'accordion_subtitle';
			this.content.className = 'content';
			
			
				
			//Appending the created elements and building the actual panel block
			this.accordion_block.appendChild(this.accordion_icon);
			this.accordion_block.appendChild(this.accordion_title);
			this.accordion_block.appendChild(this.accordion_subtitle);	
			this.accordion_block.appendChild(this.content);
			//this.container.appendChild(this.accordion_block);
			
			//Adding Event Listener
			this.accordion_block.addEventListener('click', this.open);
			
			//Appending to the fragment 
			this.fragment.appendChild(this.accordion_block);
			
			//Adding accordion counter
			this.accordion_counter++
			
		}
	};
	
	
	open(){
		let accordions = this.parentNode.childNodes;
		let len = accordions.length;
		console.log(accordions);
		
		for(let i = 0; i < len; i++) {	
		console.log(i, parseInt(this.getAttribute('data-counter')), this);
			if (accordions[i].classList.contains('open') && i != parseInt(this.getAttribute('data-counter'))){
				console.log("Ci sono", i);
				accordions[i].classList.remove('open');
			}
				
		}

		this.classList.toggle('open');
		
	}
	
	
	getAccordions() {
		console.log(this.accordions);
		return this.accordions;
	}
	
	// Initializer
	init() {
		this.createPanelsBlock();
		this.container.appendChild(this.fragment);
	}
	

}