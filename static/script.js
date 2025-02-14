function doGet() {
  return HtmlService.createHtmlOutputFromFile("form").setTitle("Agent Data Form");
}

function saveData(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    data.customerId,
    data.customerName,
    data.contactInfo,
    data.product,
    data.vehicle,
    new Date(), // Automatically adds the current date
    data.agentName,
  ]);
}