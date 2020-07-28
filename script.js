var menu = document.getElementById('menuClick');
var menuOverlay = document.querySelector('#menuOverlay');
var client1 = document.getElementById('client1');
var client2 = document.getElementById('client2');
var client3 = document.getElementById('client3');
var featClient = document.getElementById('ft-client');
var hidden1 = document.getElementById('hidden1');
var hidden2 = document.getElementById('hidden2');
var hidden3 = document.getElementById('hidden3');

menu.addEventListener("click", function() {
	menuOverlay.classList.remove('hidden');
});

client1.addEventListener("mouseover", function() {
	featClient.src = "clients-v2-green.png";
	hidden1.classList.remove('hidden');
});

client2.addEventListener("mouseover", function() {
	featClient.src = "clients-v2-purple.png";
	hidden2.classList.remove('hidden');
});

client3.addEventListener("mouseover", function() {
	featClient.src = "clients-v2-pink.png";
	hidden3.classList.remove('hidden');
});

client1.addEventListener("mouseout", function() {
	hidden1.classList.add('hidden');
});

client2.addEventListener("mouseout", function() {
	hidden2.classList.add('hidden');
});


client3.addEventListener("mouseout", function() {
	hidden3.classList.add('hidden');
});
