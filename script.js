const extendHex = (shortHex) => {
  // write your code here
	let ans="";
	for(let i=0;i<shortHex.length;i++){
		if(shortHex[i] >= 97 && shortHex[i] <= 122){
			ans+=shortHex[i]+shortHex[i];
		}
	}
	return string.toUpperCase(shortHex) ? ans.toUpperCase : ans;
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
