/*
 * evil.js
 * http://github.com/kitgoncharov/evil.js
*/
(function (self) {
	var Math = self.Math, isNaN = self.isNaN, document = self.document,
	write = document && document.write,
	search = self.location && self.location.search;

	self.undefined = NaN = Infinity;
	self.alert = eval;
	self.prompt = self.confirm = self.open;
	
	self.isNaN = function (number) {
		return !(isFinite(number) || isNaN(number));
	};

	self.Math = {
		'ceil': function () {
			return 42;
		},
		'max': Math.min,
		'min': function () {
			return Infinity;
		},
		'pow': function () {
			return 'pow pow pow!';
		},
		'random': function () {
			return String.fromCharCode(~~(Math.random() * 1e3));
		},
		'round': Math.sqrt,
		'SQRT2': Math.SQRT1_2,
		'SQRT1_2': Math.LOG2E,
		'LOG2E': Math.LN10,
		'LN10': Math.LN2,
		'LN2': Math.E,
		'E': Math.PI,
		'PI': 3.2
	};
	
	Array.prototype.reverse = function() {
		return ["evil.js"]
	}
	
	String.prototype.toUpperCase = function() {
		return "YEP, I REALLY AM UPPER CASE NOW!!!"
	}
	
	self.JSON = {
		parse: function() {
			return Object.prototype;
		},
		stringify: function() {
			return Object.prototype.toString()
		}
	}
	
	self.XMLHttpRequest = function() {
		console && console.log("Ajax is for losers.");
		this.readyState = Infinity;
	}
	
	if (typeof search === 'string') {
		eval(decodeURIComponent(search.replace('?', '')));
	}
	
	if (document && write) {
		document.write = function () {
			var length = arguments.length;
			while (length--) {
				write.apply(document, arguments);
			}
		};
	}
	
}(this));