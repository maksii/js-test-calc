function Calc(){
}

Calc.prototype = {

	preDefinedRegex: /(\d+)/g,
	preDefinedOperators : ['+','-','/','*',],
	firstNumber: void 0,
	secondNumber: void 0,
	operatorMark: void 0,
	preDefinedContains: false,
	solve: function(expr){
		if(typeof expr === 'string')
		{
				try
				{
					var constantExpression = this.splitExpression(expr);
					if(typeof constantExpression != 'undefined') return constantExpression;
					if(this.preDefinedContains)
					{
						return this.handleBaseOperators()
					}
					else
					{
						var fn = Calc.prototype[this.operatorMark];
						if(typeof fn === 'function') {
							return fn(this.fistNumber,this.secondNumber);
						}
					}

				}
				catch (e)
				{
					throw e;
				}

		}
		else
		{
			throw 'input parameter must be value of string type';
		}
	},
	defineOperator:function(operatorName, fn) {
			if(this.preDefinedOperators.indexOf(operatorName) === -1)
			{
				if(typeof fn == 'function')
				{
					Calc.prototype[ operatorName ] =  fn;
				}
			}
			else
			{
				throw 'unable to replace default operator';
			}

	},
	handleBaseOperators: function(){
		switch (this.operatorMark){
			case "+": return this.fistNumber+this.secondNumber;
				break;
			case "-": return this.fistNumber-this.secondNumber;
				break;
			case "/": return this.fistNumber/this.secondNumber;
				break;
			case "*": return this.fistNumber*this.secondNumber;
				break;
			default:
				break;

		}
	},
	splitExpression: function(expr){
		var expressionArray = expr.split(this.preDefinedRegex);
		expressionArray.splice(0, 1);
		expressionArray.splice(expressionArray.length-1, 1);

		this.preDefinedContains = expressionArray.some(function(entry) {
			if(entry) return Calc.prototype.preDefinedOperators.indexOf(entry) != -1

		});
		if(expressionArray.length===1) return eval(expr);
		this.fistNumber = parseInt(expressionArray[0]);
		this.secondNumber = parseInt(expressionArray[2]);
		this.operatorMark = expressionArray[1];

	}
}