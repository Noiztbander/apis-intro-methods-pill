import $ from "jquery";

/**
 * 1. Fetch the user details from the following endpoint:
 *
 *    https://jsonplaceholder.typicode.com/users/1/
 *
 * 2. Output the data as the text content of the `#data` element.
 *
 *    You should use the `JSON.stringify(data, null, 2)` method to
 *    format the data that you will insert into the `#data` element
 *    so that it is not printed as a string but as an object
 *    for easier reading
 *
 * You should use the jQuery.get() method to fetch the data.
 */

function exercise02() {
  // Complete the code of the functiof
  $.get("https://jsonplaceholder.typicode.com/users/1/", {
    method: "GET",
  }).then(
    function success(data, statusText, jqXHR) {
      let misDatos = $('#data').text(JSON.stringify(data, null, 2));
      console.log(misDatos);
    },
    function failed(jqXHR, errorStatusText, errorMessage) {
      console.log(jqXHR);
      console.log(errorStatusText);
      console.log(errorMessage);
    }
  );
}

export default exercise02;
