document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://localhost:4567/table-data"; // Backend API endpoint
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data); // Log the data for debugging
        
        // Populate Table 1
        const table1 = document.getElementById("table1");
        Object.entries(data.table1).forEach(([key, value]) => {
          const row = table1.insertRow();
          row.insertCell(0).textContent = key;
          row.insertCell(1).textContent = value;
        });
  
        // Populate Table 2
        const table2 = document.getElementById("table2");
        Object.entries(data.table2).forEach(([key, value]) => {
          const row = table2.insertRow();
          row.insertCell(0).textContent = key.charAt(0).toUpperCase() + key.slice(1);
          row.insertCell(1).textContent = value;
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error); // Log fetch errors
      });
  });
  