document.onkeypress = function(keyEvent)
{
	keyEvent = keyEvent || window.event;

	var keystr = keyEvent.charCode || keyEvent.keyCode;

	var evt = new CustomEvent("ImperoKeyPressEvent", { 'bubbles' : true, 'cancelable' : true , 'detail' : keystr } );

	document.dispatchEvent(evt);
}
