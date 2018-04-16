var CLIENT_ID = '609726971138-81r1ralmagsbbrjusno41ituseivohiq.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBvoq0kb92ROlMutWuo79Jb70iVBGUCJkg';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/calendar ";
var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');



function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        });
      }
      
function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }


function funcionAgregar(titulo){
    var _inicio = document.getElementById("inicio").value;
    var _fin = document.getElementById("fin").value;
    if (_inicio.value =="" || _fin.value ==""){
        alert("Por Favor rellene los campos");
    }else{
    return gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': {
        'summary': titulo,
        'start': {
          'dateTime': _inicio
        },
        'end': {
          'dateTime': _fin
        }
      }
    })
      .then(
    function(response) {
      alert("agregado con exito");
      console.log("SI");
              },
      function(err) {
      console.log("No"); 
      console.error("Execute error", err); });
      }

}
