

var shipper = document.getElementById('shipper');
var errorShipper = document.getElementById('error_shipper');
var errorCompany = document.getElementById('error_company');
var errorCode = document.getElementById('error_code');
var errorStreet = document.getElementById('error_street');
var errorCity = document.getElementById('error_city');
var errorRecevier = document.getElementById('error_receiver');


function Validate()
{

for (var i = 0; i < 1; i++)
{

  //shipper
  if (shipper.value == "")
  {
      shipper.style.border = "1px solid red";
      shipper.style.background ="#fdd";
      errorShipper.style.fontSize  = "15px";
      errorShipper.style.color = "red";
      errorShipper.textContent = "To pole nie może być puste";
      shipper.focus();

  }
  //company
  if (company.value == "")
  {
      company.style.border = "1px solid red";
      company.style.background ="#fdd";
      errorCompany.style.fontSize  = "15px";
      errorCompany.style.color = "red";
      errorCompany.textContent = "To pole nie może być puste";
      company.focus();

  }
  //code
  if (code.value == "")
  {
      code.style.border = "1px solid red";
      code.style.background ="#fdd";
      errorCode.style.fontSize  = "15px";
      errorCode.style.color = "red";
      errorCode.textContent = "To pole nie może być puste";
      code.focus();

  }

  //street
  if (street.value == "")
  {
    street.style.border = "1px solid red";
    street.style.background ="#fdd";
    errorStreet.style.fontSize  = "15px";
    errorStreet.style.color = "red";
    errorStreet.textContent = "To pole nie może być puste";
    street.focus();

  }
  //city
  if (city.value == "")
  {
    city.style.border = "1px solid red";
    city.style.background ="#fdd";
    errorCity.style.fontSize  = "15px";
    errorCity.style.color = "red";
    errorCity.textContent = "To pole nie może być puste";
    city.focus();

  }
  //receiver
  if (receiver.value == "")
  {
    receiver.style.border = "1px solid red";
    receiver.style.background ="#fdd";
    errorRecevier.style.fontSize  = "15px";
    errorRecevier.style.color = "red";
    errorRecevier.textContent = "To pole nie może być puste";
    receiver.focus();
  }


  //shipperValid
  if (shipper.value !== "")
  {
      shipper.style.border = "1px solid green";
      errorShipper.textContent = "";

  }
  //companyValid
  if (company.value !== "")
  {
      company.style.border = "1px solid green";
      errorCompany.textContent = "";

  }
  //codeValid
  if (code.value !== "")
  {
      code.style.border = "1px solid green";
      errorCode.textContent = "";

  }

  //streetValid
  if (street.value !== "")
  {
    street.style.border = "1px solid green";
    errorStreet.textContent = "";

  }
  //cityValid
  if (city.value !== "")
  {
    city.style.border = "1px solid green";
    errorCity.textContent = "";
  }
  //receiverValid
  if (receiver.value !== "")
  {
    receiver.style.border = "1px solid green";
    errorRecevier.textContent = "";
  }

  if (shipper.value == "" || company.value == "" || code.value == "" || street.value == "" || city.value == "" || receiver.value == "")
  {
    return false;
  }

  if (shipper.value !== "" && company.value !== "" && code.value !== "" && street.value !== "" && city.value !== "" && receiver.value !== "")
  {
    return true;
  }

}


}
