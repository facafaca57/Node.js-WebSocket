window.onload = function() {
    var form = document.getElementById('form');
    var messageField = document.getElementById('input');
    var messagesList = document.getElementById('messages');
    var socketStatus = document.getElementById('status');

    const connection = new WebSocket('ws://localhost:3000');

    connection.onerror = function(error) {
      console.log('WebSocket Error: ' + error);
    };

    connection.onmessage = function(event) {
      var message = event.data;
      messagesList.innerHTML += '<li class="received"><span>Отримано:</span>' + message + '</li>';
    };

    form.onsubmit = function(e) {
      e.preventDefault();
      var message = messageField.value;
      connection.send(message);
      messagesList.innerHTML += '<li class="sent"><span>Відправлено:</span>' + message + '</li>';
      messageField.value = '';
      return false;
    };
  };
