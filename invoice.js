document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('td')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');
   
       

       
    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal(row) {
        
        let quantity = document.querySelector(".quantity").value; 
            let unitPrice = document.querySelector(".unitPrice").value;
            let total = quantity * unitPrice;
            document.getElementById("item-t").innerHTML = total;
    }


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});
