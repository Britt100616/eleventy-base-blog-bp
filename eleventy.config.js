module.exports = function(eleventyConfig) {
	return {
		dir: {
			_input: "content",
			get input() {
				return this._input;
			},
			set input(value) {
				this._input = value;
			},
			output: "_site"
	
		},
	};

;
		}
	