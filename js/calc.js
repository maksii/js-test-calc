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
					return e;
				}
			}
			else
			{
				return 'Input parameter not looks like the expression';
			}
		}
		else
		{
			return 'Input parameter must be value of string type';
		}
	}
}