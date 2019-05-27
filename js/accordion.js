"use strict";

class Accordion {
	
	//***************** PROPERTIES **********************//

	constructor(options) {
		//Instantiating a document fragment, it takes less resources than using innerHTML to create the whole accordion structure
		this.fragment = document.createDocumentFragment();
		this.container = document.getElementById(options.container);
		this.panels = options.panels;
		//Setting it to 1 in the init method to skip the Main Accordion block
		this.accordion_counter = 0;

		//Initializer
		this.init();
	}
	


	//***************** METHODS **********************//

	//IT GENERATES THE MAIN ACCORDION PANEL (The header) IT GETS CALLED ONLY IF THE MAIN TITLE IS SET BY THE USER
	generateHeaderPanel() {
		//Generating the header accordion (If title is left blank it won't appear)
		this.main_accordion = document.createElement('section');
		this.main_accordion_title = document.createElement('p');
		this.main_accordion.appendChild(this.main_accordion_title);
		this.main_accordion_title.innerHTML = options.mainTitle;
		this.main_accordion_title.className = 'main_text';
		//Adding the ID for the main panel
		this.main_accordion.setAttribute('id', 'panel_0');
		this.main_accordion.className = 'main_accordion';
		//Appending the main panel to the container
		this.container.appendChild(this.main_accordion);
	}


	//THIS METHOD ACTUALLY GENERATES THE HTML ACCORDION BLOCKS CYCLING TROUGH THE OPTIONS PANEL OBJECTS.
	generatePanelsBlock() {

		for (let option in this.panels) {

			//Generating the main accordion div
			this.accordion_block = document.createElement('div');
			this.accordion_block.className = 'accordion';
			this.accordion_block.setAttribute('data-counter', this.accordion_counter);
			this.accordion_block.className = 'accordion';
			this.accordion_block.setAttribute('data-counter', this.accordion_counter);


			//Generating the left and right columns inside the main accordion block
			this.left_column = document.createElement('div');
			this.right_column = document.createElement('div');
			this.left_column.className = 'column left';
			this.right_column.className = 'column right';
			//Adding it to the main block
			this.accordion_block.appendChild(this.left_column);
			this.accordion_block.appendChild(this.right_column);


			//Generating the accordion title paragraph
			this.accordion_title = document.createElement('p');
			this.accordion_title.innerHTML = this.panels[option].title;
			this.accordion_title.className = 'accordion_title';
			//Adding it to the main block
			this.left_column.appendChild(this.accordion_title);


			//Creating the icon Element
			this.accordion_icon = document.createElement('i');
			this.accordion_icon.innerHTML = 'expand_more';
			//Adding it to the main block
			this.right_column.appendChild(this.accordion_icon);


			//Generating the accordion Subtitle Paragraph (Only if not null or empty)
			if(this.panels[option].subtitle !== '' && this.panels[option].subtitle !== null){
				this.accordion_subtitle = document.createElement('p');
				this.accordion_subtitle.innerHTML = this.panels[option].subtitle;
				this.accordion_subtitle.className = 'accordion_subtitle';
				this.accordion_icon.className = 'material-icons md-26 with_subtitle';
				//Adding it to the main block
				this.left_column.appendChild(this.accordion_subtitle);
			}else{
				this.accordion_icon.className = 'material-icons md-26 no_subtitle';
			}


			//Generating the accordion Content element
			this.content = document.createElement('div');
			this.content.innerHTML = this.panels[option].content;
			this.content.className = 'content';
			this.accordion_block.appendChild(this.content);


			//Adding the Event Listener
			this.accordion_block.addEventListener('click', this.open);

			//Appending the current block to the fragment
			this.fragment.appendChild(this.accordion_block);
			
			//Increasing accordion counter (I set this counter as an attribute of every block, it helps to indentify every single accordion block)
			this.accordion_counter++
		}
	};
	

	//THE METHODS THAT GETS ATTACHED ON THE CLICK EVENT TO EVERY ACCORDION BLOCK, TOGGLES CLASS AND ICONS.
	open(){
		let accordions = this.parentNode.childNodes;
		let len = accordions.length;

		for (let i = 0; i < len; i++) {
			if (accordions[i].classList.contains('open') && i !== parseInt(this.getAttribute('data-counter'))) {
				accordions[i].classList.remove('open');
				accordions[i].childNodes[1].childNodes[0].innerHTML = 'expand_more';
			}
		}

		//Toggling the class (open or not)
		this.classList.toggle('open');

		//Toggling the icon
		if(this.childNodes[1].childNodes[0].innerHTML === 'expand_less')
			this.childNodes[1].childNodes[0].innerHTML = 'expand_more';
		else
			this.childNodes[1].childNodes[0].innerHTML = 'expand_less';
	}
	

	//MAIN METHOD WHICH INITIALIZE EVERY OTHER METHOD TO CREATE THE FINAL ACCORDION STRUCTURE
	init() {
		//Checking if the mainTitle property is set (If not i hide the mainTitle block)
		if (options.mainTitle !== ''){
			this.generateHeaderPanel();
			this.accordion_counter = 1;
		}

		this.generatePanelsBlock();
		this.container.appendChild(this.fragment);
	}
	

}