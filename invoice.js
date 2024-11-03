let itemData = [];

function addNewItem() {
    document.getElementById("form").style.display = "block";
}

function closeModel() {
    document.getElementById("form").style.display = "none";
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let itemName = document.getElementById("itemName").value.trim();
    let quantity = parseFloat(document.getElementById("quantity").value) || 0;
    let price = parseFloat(document.getElementById("price").value) || 0;
    let total = quantity * price;

    let itemObject = { 
        itemName, 
        quantity, 
        price, 
        total 
    };

    itemData.push(itemObject);

    form.reset();
    closeModel();

    showItems();
    updateInvoiceTotal();
});

function updateItemTotal(index) {
    let quantityInput = document.getElementById(`quantity-${index}`);
    let priceInput = document.getElementById(`price-${index}`);
    let totalCell = document.getElementById(`total-${index}`);

    let quantity = parseFloat(quantityInput.value) || 0;
    let price = parseFloat(priceInput.value) || 0;
    let total = quantity * price;

    itemData[index].quantity = quantity;
    itemData[index].price = price;
    itemData[index].total = total;
    totalCell.innerHTML = total.toFixed(2);

    updateInvoiceTotal();
}

function updateInvoiceTotal() {
    let totalInvoice = itemData.reduce((sum, item) => sum + item.total, 0);
    document.getElementById("invoiceTotal").innerHTML = totalInvoice.toFixed(2);
}

function showItems() {
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ''; 

    itemData.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>article-${index + 1}</td>
            <td><input type="number" id="quantity-${index}" value="${item.quantity}" min="0" class="quantity" onchange="updateItemTotal(${index})"></td>
            <td><input type="number" id="price-${index}" value="${item.price}" min="0" step="0.01" class="unitPrice" onchange="updateItemTotal(${index})"></td>
            <td class="itemTotal" id="total-${index}">${item.total.toFixed(2)}</td>
        `;
        tableBody.appendChild(tr);
    });
}
