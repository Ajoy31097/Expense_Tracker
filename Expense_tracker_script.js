let expenses = [];

const storedExpenses = localStorage.getItem('expenses');
if (storedExpenses) {
    expenses = JSON.parse(storedExpenses);
}

const categoryselect = document.getElementById('category-selector');
const descriptionfield = document.getElementById('description');
const amountinput = document.getElementById('amount-selector');
const dateinput = document.getElementById('date');
const addBtn = document.getElementById('add-button');
const expensesTableBody = document.getElementById('expense_list_body');

function updateLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

addBtn.addEventListener('click', function () {
    const category = categoryselect.value;
    const description = descriptionfield.value;
    const amount = Number(amountinput.value);
    const date = dateinput.value;

    expenses.push({ category, amount, description, date });


    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const descriptionCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const actionsCell = newRow.insertCell();

    const dltBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    dltBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', function () {

        const categoryInput = document.createElement('input');
        categoryInput.type = 'text';
        categoryInput.value = expense.category;
        categoryCell.innerHTML = '';
        categoryCell.appendChild(categoryInput);

        const descriptionInput = document.createElement('input');
        descriptionInput.type = 'text';
        descriptionInput.value = expense.description;
        descriptionCell.innerHTML = '';
        descriptionCell.appendChild(descriptionInput);

        const amountInput = document.createElement('input');
        amountInput.type = 'number';
        amountInput.value = expense.amount;
        amountCell.innerHTML = '';
        amountCell.appendChild(amountInput);

        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.value = expense.date;
        dateCell.innerHTML = '';
        dateCell.appendChild(dateInput);

        editBtn.textContent = 'Save';
        editBtn.removeEventListener('click', this);

        editBtn.addEventListener('click', function () {

            const updatedCategory = categoryInput.value;
            const updatedDescription = descriptionInput.value;
            const updatedAmount = Number(amountInput.value);
            const updatedDate = dateInput.value;

            expense.category = updatedCategory;
            expense.description = updatedDescription;
            expense.amount = updatedAmount;
            expense.date = updatedDate;

            categoryCell.textContent = updatedCategory;
            descriptionCell.textContent = updatedDescription;
            amountCell.textContent = updatedAmount;
            dateCell.textContent = updatedDate;

            editBtn.textContent = 'Edit';
            editBtn.removeEventListener('click', this);
            editBtn.addEventListener('click', this);

            updateLocalStorage();
        });
    });

    dltBtn.classList.add('delete-btn');
    dltBtn.addEventListener('click', function () {
        expenses.splice(expenses.indexOf(expense), 1);
        expensesTableBody.removeChild(newRow);
        updateLocalStorage();
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    descriptionCell.textContent = expense.description;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;


    actionsCell.appendChild(dltBtn);
    actionsCell.appendChild(editBtn);

    updateLocalStorage();

});


