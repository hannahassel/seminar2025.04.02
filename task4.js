// Data
/*let employees = [];

document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    const role = document.getElementById('roleInput').value.trim();
    const department = document.getElementById('departmentInput').value;

    if (name === '' || role === '' || department === '') {
        alert('All fields are required.');
        return;
    }

    const newEmployee = { id: Date.now(), name, role, department };
    employees.push(newEmployee);

    renderEmployeeList(employees);
    updateStats();

    // Input reset
    document.getElementById('nameInput').value = '';
    document.getElementById('roleInput').value = '';
    document.getElementById('departmentInput').value = '';
});

// Process employees
function renderEmployeeList(empList) {
    const ul = document.getElementById('employeeList');
    ul.innerHTML = '';

    empList.forEach(emp => {
        const li = document.createElement('li');
        li.className = 'employee-item';
        li.innerHTML = `
            <span>${emp.name} - ${emp.role} (${emp.department})</span>
            <button class="deleteBtn" data-id="${emp.id}">Delete</button>
        `;
        ul.appendChild(li);
    });

    // Attach event listeners
    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            employees = employees.filter(e => e.id !== id);
            renderEmployeeList(employees);
            updateStats();
        });
    });
}

// Updating data
function updateStats() {
    document.getElementById('employeeCount').textContent = `Total Employees: ${employees.length}`;

    const deptStats = {};
    employees.forEach(emp => {
        if (!deptStats[emp.department]) {
            deptStats[emp.department] = 0;
        }
        deptStats[emp.department]++;
    });

    let statsHTML = '';
    for (const dept in deptStats) {
        statsHTML += `${dept}: ${deptStats[dept]} | `;
    }

    document.getElementById('departmentStats').textContent = statsHTML;
}

// Filtering employees
document.getElementById('searchInput').addEventListener('input', function() {
    const term = this.value.toLowerCase();
    const filtered = employees.filter(emp => emp.name.toLowerCase().includes(term));
    renderEmployeeList(filtered);
}); */

// Data storage
let employees = [];

document.getElementById('addEmployeeBtn').addEventListener('click', addEmployee);
document.getElementById('searchInput').addEventListener('input', searchEmployees);

// Function to add an employee
function addEmployee() {
    const nameInput = document.getElementById('nameInput');
    const roleInput = document.getElementById('roleInput');
    const departmentInput = document.getElementById('departmentInput');

    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const department = departmentInput.value;

    if (!isValidEmployee(name, role, department)) return;

    const newEmployee = createEmployee(name, role, department);
    employees.push(newEmployee);

    renderEmployeeList(employees);
    updateStats();
    clearInputs(nameInput, roleInput, departmentInput);
}

// Validate employee input
function isValidEmployee(name, role, department) {
    if (!name || !role || !department) {
        alert('All fields are required.');
        return false;
    }
    return true;
}

// Create a new employee object
function createEmployee(name, role, department) {
    return { id: Date.now(), name, role, department };
}

// Render employee list in UI
function renderEmployeeList(empList) {
    const ul = document.getElementById('employeeList');
    ul.innerHTML = '';

    empList.forEach(emp => {
        const li = document.createElement('li');
        li.className = 'employee-item';
        li.innerHTML = `
            <span>${emp.name} - ${emp.role} (${emp.department})</span>
            <button class="deleteBtn" data-id="${emp.id}">Delete</button>
        `;
        ul.appendChild(li);
    });

    attachDeleteEvent();
}

// Attach event listeners to delete buttons
function attachDeleteEvent() {
    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', deleteEmployee);
    });
}

// Delete employee from list
function deleteEmployee() {
    const id = parseInt(this.getAttribute('data-id'));
    employees = employees.filter(emp => emp.id !== id);
    renderEmployeeList(employees);
    updateStats();
}

// Update employee statistics
function updateStats() {
    document.getElementById('employeeCount').textContent = `Total Employees: ${employees.length}`;
    
    const deptStats = employees.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
    }, {});

    document.getElementById('departmentStats').textContent = 
        Object.entries(deptStats).map(([dept, count]) => `${dept}: ${count}`).join(' | ');
}

// Filter employees based on search input
function searchEmployees() {
    const term = this.value.toLowerCase();
    const filtered = employees.filter(emp => emp.name.toLowerCase().includes(term));
    renderEmployeeList(filtered);
}

// Clear input fields
function clearInputs(...inputs) {
    inputs.forEach(input => input.value = '');
}


