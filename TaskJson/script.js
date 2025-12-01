// JSON جاهز داخل الكود
let jsonData = {
    "users": [
        { "firstName": "Terry", "email": "atuny0@sohu.com", "phone": "+63 791 675 8914" },
        { "firstName": "Sheldon", "email": "hbingley1@plala.or.jp", "phone": "+7 813 117 7139" },
        { "firstName": "Terrill", "email": "rshaw2@ucla.edu", "phone": "+63 729 792 7942" },
        { "firstName": "Terrill", "email": "rshaw2@ucla.edu", "phone": "+63 729 792 7942" },
        { "firstName": "Terrill", "email": "rshaw2@ucla.edu", "phone": "+63 729 792 7942" },
        { "firstName": "Terrill", "email": "rshaw2@ucla.edu", "phone": "+63 729 792 7942" }
        
    ]
};

let tableVisible = false;

document.getElementById("toggleBtn").addEventListener("click", function () {
    if (!tableVisible) {
        showTable();
        tableVisible = true;
    }
});

document.getElementById("toggleBtn").addEventListener("dblclick", function () {
    hideTable();
});

function showTable() {
    let users = jsonData.users;
    let table = `
        <table border="1" width="100%">
            <tr>
                <th>First Name</th>
                <th>Mobile</th>
                <th>Email</th>
            </tr>
    `;

    users.forEach(u => {
        table += `
            <tr>
                <td>${u.firstName}</td>
                <td>${u.phone}</td>
                <td>${u.email}</td>
            </tr>
        `;
    });

    table += `</table>`;
    document.getElementById("tableContainer").innerHTML = table;
}

function hideTable() {
    document.getElementById("tableContainer").innerHTML = "";
    tableVisible = false;
}