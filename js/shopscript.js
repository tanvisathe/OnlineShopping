// This is the price array for the grocery items


var prices= new Array();
 prices["None"]=0;
 prices["Milk"]=5;
 prices["Egg"]=5;
 prices["Bread"]=7;
 prices["Apple"]=8;
 prices["Raspberry"]=10;
 prices["Pineapple"]=5;

 var finalpurchase = [0,0,0,0,0,0,0];
 
function getPrice()
{
    
    var groceryItemPrice =0;
    //Get a reference to the form id="shoplist"
    var theForm = document.forms["shoplist"];
    //Get a reference to the select id="selectgroceryitem"
     var selectedItem = theForm.elements["selectgroceryitem"];
     
    //set grocery item Price equal to value user chose
    //For example prices["Milk".value] would be equal to 5
    groceryItemPrice = prices[selectedItem.value];
   
    //finally we return cakeFillingPrice
    return groceryItemPrice;
}


function getQuantity()
{
    var howmany =0;
    //Assume form with id="theform"
    var theForm = document.forms["shoplist"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["qty"];
    
    //If the textbox is not blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
return howmany;
} 



function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    //var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();
    var totalPrice = getPrice() * getQuantity();
    //display the result
    var divobj = document.getElementById("totalPrice");
    divobj.style.display='block';
    divobj.innerHTML = "Total Price is $"+totalPrice;

}

function ViewCart(){
	
    
}
function AddtoCart(){
var theForm = document.forms["shoplist"];
 var selectedItem = theForm.elements["selectgroceryitem"];// eg:Milk
var strSel = selectedItem.options[selectedItem.selectedIndex].text
for(i=0;i<7;i++)
finalpurchase = strSel[i];
}

function ClearCart(){

	alert("You have just emptied your cart.");
}




