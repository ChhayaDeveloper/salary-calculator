function calculateSalary() {

    let name = document.getElementById("name").value.trim();
    let empId = document.getElementById("empId").value.trim();

    let basic = Number(document.getElementById("basic").value);
    let hra = Number(document.getElementById("hra").value);
    let allowance = Number(document.getElementById("allowance").value);
    let deduction = Number(document.getElementById("deduction").value);

    if (name === "" || empId === "" || basic <= 0) {
        alert("Please enter employee name, ID and valid basic salary.");
        return;
    }

    if (hra < 0 || allowance < 0 || deduction < 0) {
        alert("Salary values cannot be negative.");
        return;
    }

    let gross = basic + hra + allowance;
    let net = gross - deduction;

    document.getElementById("showName").textContent = name;
    document.getElementById("showId").textContent = empId;

    document.getElementById("showBasic").textContent =
        "₹" + basic.toLocaleString("en-IN");

    document.getElementById("showHra").textContent =
        "₹" + hra.toLocaleString("en-IN");

    document.getElementById("showAllowance").textContent =
        "₹" + allowance.toLocaleString("en-IN");

    document.getElementById("showDeduction").textContent =
        "₹" + deduction.toLocaleString("en-IN");

    document.getElementById("grossSalary").textContent =
        "₹" + gross.toLocaleString("en-IN");

    document.getElementById("netSalary").textContent =
        "₹" + net.toLocaleString("en-IN");
}


function resetForm() {

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("basic").value = "";
    document.getElementById("hra").value = "";
    document.getElementById("allowance").value = "";
    document.getElementById("deduction").value = "";

    document.getElementById("showName").textContent = "---";
    document.getElementById("showId").textContent = "---";

    document.getElementById("showBasic").textContent = "₹0";
    document.getElementById("showHra").textContent = "₹0";
    document.getElementById("showAllowance").textContent = "₹0";
    document.getElementById("showDeduction").textContent = "₹0";

    document.getElementById("grossSalary").textContent = "₹0";
    document.getElementById("netSalary").textContent = "₹0";
}