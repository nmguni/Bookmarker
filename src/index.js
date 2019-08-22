import "./styels/main.scss";

// //Listen for form submit

document.getElementById("myForm").addEventListener("submit", saveBookmark);

// svaebook mark
function saveBookmark(e) {
  // get form values
  let siteName = document.getElementById("siteName").value;
  let siteUrl = document.getElementById("siteUrl").value;

  //   clicking submit saves an empty book mark
  //   if (!siteName || !siteUrl) {
  //     alert("Please fill in the form");
  //     return false;
  //   }

  //   // regular expression/ pattern matching/ rgx url
  //   // this is regular expression to format a url

  //   let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  //   let regex = new RegExp(expression);

  //   if (!siteUrl.match(regex)) {
  //     alert("Pleasse us vald url");
  //     return false;
  //   }

  //   let bookmark = {
  //     name: siteName,
  //     url: siteUrl
  //   };

  // local storage
  //   localStorage.setItem("test", "hello world");

  // test if bookmark is null
  if (localStorage.getItem("bookmarks") === null) {
    //init array
    let bookmarks = [];

    // add array
    bookmarks.push(bookmark);

    // set to localstorage
    // JSON.stringify turns JSON into string
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    // get bookmars from local storage
    // jSON.parse() turns strng into json
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    //add bookmark to array
    bookmarks.push(bookmark);

    // reset it back to local sorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  // refetch bookmarks
  fetchBookmarks();

  // prevent form from submitting
  e.preventDefault();
}

function fetchBookmarks(url) {
  console.log(url);
}

// fetch book marks
function fetchBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  // get output id
  let bookmarkResults = document.getElementById("bookmarkResults");

  //   build output
  bookmarkResults.innerHTML = "";
  // loop bookmarks in local and out put one by one
  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;

    //build output
    bookmarkResults.innerHTML +=
      '<div class="well">' +
      "<h3>" +
      name +
      ' <a class="btn btn-default" target="_blank" href="' +
      url +
      '">Visit</a> ' +
      " <a onclick=\"deleteBookmark('" +
      url +
      '\')" class="btn btn-danger" href="#">Delete</a> ' +
      "</h3>" +
      "</div>";
  }
}

// form validation

function validateForm() {
  //   clicking submit saves an empty book mark
  if (!siteName || !siteUrl) {
    alert("Please fill in the form");
    return false;
  }

  // regular expression/ pattern matching/ rgx url
  // this is regular expression to format a url

  let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Pleasse us vald url");
    return false;
  }

  let bookmark = {
    name: siteName,
    url: siteUrl
  };

  return true;
}
