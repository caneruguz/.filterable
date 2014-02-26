filterable
==========

Filterable is small jQuery plugin that turns any text input into a filtering box that hides and shows elements on the page.

### What it does:
- Shows or hides content based on what you type in an input box
- Highlights words that match your query. 

---
### How to Install

#### Step 1: Add the Files

Copy and paste the filterable file. There is a minified version for production and full version if you would like to expand the code. Load the files in your html file where you load your javascript (usually at the end of the document. ) The file rference should come AFTER jQuery or it won't work. Here's an example:

```javascript
<script src="https://code.jquery.com/jquery.js"></script>
<script src="js/filterable.js"></script>
```
#### Step 2: Add an input div
You can use this tool with any input form element like the one below. In terms of style it would work better if you surround it by a div but that's up to you.
```html
 <div> <input type="text" class="filterable" placeholder="filter here" ></div>
```

#### Step 3: Add filterable to your element:
Use this short form to make the input filterable (remember to load it after the DOM is ready. It is advised to at least add the selector variable to make sure you show and hide the relevant content. Check the options table below for details.

```javascript
 $('.filterable').filterable({ 'selector' : '.items'});
```
--- 
### Options
Here's an example with options defined:

```javascript 
  $('.filterable').filterable({
  	selector : 'h2', 
  	fade : true, 
    resetText : '×',
    highlight : true,
    highlightColor: '#ffffa6',
  	complete : function(){ 
  		console.log('done!'); 
  		}
  });
```
Option	| Default	| Explanation
--- | --- | ---
selector  (string) | "p" | Add any selector you like in the jQuery selector format. For instance `.items`
fade (boolean) 	| true  | 	`true` does the animation as fadeI/fadeOut. `false` will instead use the show/hide, which does not have an animation but is faster.
resetText	(string) | ×	| Enter any string. You can change the CSS of the reset button by defining it in your css file under `.ft-reset`
highlight (boolean) | true | Highlights each occurance of the search term within the selector. 
highlightColor (string) | '#ffffa6' | Color of the highlight. 
complete	| no default	| Enter any function that you would like ran after the filtering by using `function(){}`

---
### Style
The code does not come with any CSS files but you can easily change the style components with the following class names.

**.ft-reset** : The reset button

**.filterable** : the form input field that filters the text


You can also add more style elements to the div surrounding the html to fit with your existing layout. 


---
### Dependencies
This code is designed to fit as many environments as possible. The only requirement is jQuery. Get the lates version here:
[http://jquery.com/](http://jquery.com/)

---
### Change Log
Past and planned changes to the code

#### Planned
- Fix bug to make the highlight omit html with longer tags like <span> 
- Add scroll helper

#### Version 0.2
- Added highlighting
- Added highlighting options. 
- Fixed issues with catching html code with typical text html like h1, p, b etc. 

#### Version 0.1
- Dedicated github repository and documentation created.
- Callback function option added
- Fade animation option added
- Selectors option added.
- Jquery plugin created.
