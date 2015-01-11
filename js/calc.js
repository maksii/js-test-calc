function Calc(){
}

Calc.prototype = {
	solve: function(expr){
		if(typeof expr === 'string')
		{
			if (expr.match(/^[0-9+\-*/(). ]*$/))
			{
				try
				{
					var answer = expr != '' ? eval(expr) : '0';


					return answer;
				}
				catch (e)
				{
					throw e;
				}
			}
			else
			{
				throw 'input parameter not looks like the expression';
			}
		}
		else
		{
			throw 'input parameter must be value of string type';
		}
	},
	defineOperator:function(expr)
	{
		return expr;
	}
}