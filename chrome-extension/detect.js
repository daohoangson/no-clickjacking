(function()
{
	var count = 0;
	var countMax = 10;
	var intervalStep = 100;
	var interval = intervalStep;

	var nodeIdPrefix = '_no-clickjacking-';
	var nodeIdCount = 0;

	var log = function()
	{
		return;
		console.log.apply(console, arguments);
	}

	var detect = function()
	{
		log('detecting...', count, interval);

		var iframes = document.getElementsByTagName('iframe');
		var transparentNodeIds = [];

		for (var i in iframes)
		{
			var iframe = iframes[i];
			var node = iframe;
			
			while(node)
			{
				var style = getComputedStyle(node);

				if (style && parseFloat('0' + style.opacity) < 0.1)
				{
					log('found', node, iframe);

					// reset interval to check as fast as possible
					interval = intervalStep;
					count = 0;

					var nodeId = node.id;
					if (!nodeId)
					{
						nodeId = nodeIdPrefix + nodeIdCount;
						nodeIdCount++;
						node.id = nodeId;
					}
					transparentNodeIds.push(nodeId);
				}

				node = node.parentNode;
			}
		}

		if (transparentNodeIds.length > 0)
		{
			var css = '';
			for (var i in transparentNodeIds)
			{
				css += '#' + transparentNodeIds[i] + '{opacity:1 !important;overflow: visible !important}';
			}

			var style = document.createElement('style');
			style.innerText = css;
			document.getElementsByTagName('head')[0].appendChild(style);
		}

		if (count < countMax)
		{
			count++;
			interval += count * intervalStep;
			window.setTimeout(detect, interval);
		}
		else
		{
			log('stopped');
		}
	};

	if (window.top === window)
	{
		detect();
	}
})();