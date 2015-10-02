webpackJsonp([0],[
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

	  handleInputChange: function() {
	    this.setState({foo: 'bar'});
	  },

	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("button", {onClick: this.openModal}, "Open Modal"), 
	        React.createElement(Modal, {
	          closeTimeoutMS: 150, 
	          isOpen: this.state.modalIsOpen, 
	          onRequestClose: this.handleModalCloseRequest
	        }, 
	          React.createElement("h1", null, "Hello"), 
	          React.createElement("button", {onClick: this.closeModal}, "close"), 
	          React.createElement("div", null, "I am a modal"), 
	          React.createElement("form", null, 
	            React.createElement("input", {onChange: this.handleInputChange}), 
	            React.createElement("input", null), 
	            React.createElement("input", null), 
	            React.createElement("input", null), 
	            React.createElement("input", null), 
	            React.createElement("br", null), 
	            React.createElement("button", null, "hi"), 
	            React.createElement("button", null, "hi"), 
	            React.createElement("button", null, "hi"), 
	            React.createElement("button", null, "hi")
	          )
	        )
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(App, null), appElement);

/***/ }
]);