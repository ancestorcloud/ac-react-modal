webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(157);
	var Modal = __webpack_require__(158);

	var appElement = document.getElementById('example');

	Modal.setAppElement(appElement);
	Modal.injectCSS();

	var App = React.createClass({displayName: "App",

	  getInitialState: function() {
	    return { modalIsOpen: false };
	  },

	  openModal: function() {
	    this.setState({modalIsOpen: true});
	  },

	  closeModal: function() {
	    this.setState({modalIsOpen: false});
	  },

	  handleModalCloseRequest: function() {
	    // opportunity to validate something and keep the modal open even if it
	    // requested to be closed
	    this.setState({modalIsOpen: false});
	  },

	  handleSaveClicked: function(e) {
	    alert('Save button was clicked');
	  },

	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("button", {onClick: this.openModal}, "Open Modal"), 
	        React.createElement(Modal, {
	          className: "Modal__Bootstrap modal-dialog", 
	          closeTimeoutMS: 150, 
	          isOpen: this.state.modalIsOpen, 
	          onRequestClose: this.handleModalCloseRequest
	        }, 
	          React.createElement("div", {className: "modal-content"}, 
	            React.createElement("div", {className: "modal-header"}, 
	              React.createElement("button", {type: "button", className: "close", onClick: this.handleModalCloseRequest}, 
	                React.createElement("span", {"aria-hidden": "true"}, "×"), 
	                React.createElement("span", {className: "sr-only"}, "Close")
	              ), 
	              React.createElement("h4", {className: "modal-title"}, "Modal title")
	            ), 
	            React.createElement("div", {className: "modal-body"}, 
	              React.createElement("h4", null, "Really long content..."), 
	              React.createElement("p", null, "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"), 
	              React.createElement("p", null, "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"), 
	              React.createElement("p", null, "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus")
	            ), 
	            React.createElement("div", {className: "modal-footer"}, 
	              React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.handleModalCloseRequest}, "Close"), 
	              React.createElement("button", {type: "button", className: "btn btn-primary", onClick: this.handleSaveClicked}, "Save changes")
	            )
	          )
	        )
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(App, null), appElement);

/***/ }
]);