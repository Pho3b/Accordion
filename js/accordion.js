"use strict";

class Accordion {

	/**
	 * Constructor with given options object
	 * 
	 * @param {*} options 
	 */
	constructor(options) {
		this.fragment = document.createDocumentFragment();
		this.container = document.getElementById(options.container);
		this.panels = options.panels;
		this.accordion_counter = 0;

		this.init();
	}

	/**
	 * Initializes the component
	 */
	init() {
		if (!options.mainTitle) {
			this.generateHeaderPanel();
			this.accordion_counter = 1;
		}

		this.generatePanelsBlock();
		this.container.appendChild(this.fragment);
	}

	/**
	 * Generates the accordion header
	 */
	generateHeaderPanel() {
		this.main_accordion = document.createElement('section');
		this.main_accordion_title = document.createElement('p');
		this.main_accordion.appendChild(this.main_accordion_title);
		this.main_accordion_title.innerHTML = options.mainTitle;
		this.main_accordion_title.className = 'main_text';
		this.main_accordion.setAttribute('id', 'panel_0');
		this.main_accordion.className = 'main_accordion';
		this.container.appendChild(this.main_accordion);
	}


	/**
	 * Generates the accordion panels
	 */
	generatePanelsBlock() {
		for (let option in this.panels) {
			// main accordion divs
			this.accordion_block = document.createElement('div');
			this.accordion_block.className = 'accordion';
			this.accordion_block.setAttribute('data-counter', this.accordion_counter);
			this.accordion_block.className = 'accordion';
			this.accordion_block.setAttribute('data-counter', this.accordion_counter);

			// main accordion left and right columns
			this.left_column = document.createElement('div');
			this.right_column = document.createElement('div');
			this.left_column.className = 'column left';
			this.right_column.className = 'column right';
			this.accordion_block.appendChild(this.left_column);
			this.accordion_block.appendChild(this.right_column);

			// accordion title
			this.accordion_title = document.createElement('p');
			this.accordion_title.innerHTML = this.panels[option].title;
			this.accordion_title.className = 'accordion_title';
			this.left_column.appendChild(this.accordion_title);

			// icon element
			this.accordion_icon = document.createElement('i');
			this.accordion_icon.innerHTML = 'expand_more';
			this.right_column.appendChild(this.accordion_icon);

			// accordion subtitle paragraph
			if (this.panels[option].subtitle) {
				this.accordion_subtitle = document.createElement('p');
				this.accordion_subtitle.innerHTML = this.panels[option].subtitle;
				this.accordion_subtitle.className = 'accordion_subtitle';
				this.accordion_icon.className = 'material-icons md-26 with_subtitle';
				this.left_column.appendChild(this.accordion_subtitle);
			} else {
				this.accordion_icon.className = 'material-icons md-26 no_subtitle';
			}

			// accordion content
			this.content = document.createElement('div');
			this.content.innerHTML = this.panels[option].content;
			this.content.className = 'content';
			this.accordion_block.appendChild(this.content);

			// event listener and ID
			this.accordion_counter++;
			this.accordion_block.addEventListener('click', this.open);
			this.fragment.appendChild(this.accordion_block);
		}
	};

	/**
	 * Opens the clicked accordion
	 */
	open() {
		let accordions = this.parentNode.childNodes;
		let accordionBody = this.childNodes[1].childNodes[0].innerHTML;

		for (let i = 0; i < accordions.length; i++) {
			if (accordions[i].classList.contains('open') && i !== parseInt(this.getAttribute('data-counter'))) {
				accordions[i].classList.remove('open');
				accordionBody = 'expand_more';
			}
		}

		// toggling icons
		if (accordionBody === 'expand_less') accordionBody = 'expand_more';
		else accordionBody = 'expand_less';

		this.classList.toggle('open');
	}
}
