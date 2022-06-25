const $ = (qry)=> document.body.querySelector(qry);
const $all = (qry)=> [].slice.call(document.body.querySelectorAll(qry));

console.log("Starting! ...");

const cash_text = $("h3");
const get_cash_btn = $("#get-cash-btn");
const upgrade_btn = $("#upgrade-btn");

let cash = 0;
let cash_per_click = 1;

get_cash_btn.onclick = () => {    
	cash += cash_per_click;
	cash_text.innerText = `Cash: ${cash}`;
}

upgrade_btn.onclick = () => {
  // can afford to spend $10?
	// subtract $10
	// increase "per_click" by 1
	// update effected elements
	if (cash < 10) return;
	cash -= 10;
	cash_per_click++;
	cash_text.innerText = `Cash: ${cash}`;
	get_cash_btn.innerText = `Get ${cash_per_click} cash`;
	upgrade_btn.innerText = `Upgrade to ${cash_per_click + 1} cash/click ($10)`;
}




// class, struct, enum: VarName
// func: varName
// variable: var_name
// const: VAR_NAME

// spend $10 and do +1 cash per click
// TODO:
// - get cash button needs to show how much money you're getting per click (ex: "Get 5 cash")
// - upgrade button needs to show how much it costs (ex: "Per click +1 ($10)")