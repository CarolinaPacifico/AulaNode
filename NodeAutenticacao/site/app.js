const firebaseConfig = {
    apiKey: "AIzaSyDzAw9FIytZtzDh5IPkWw8RjrtSgmptKhE",
    authDomain: "projeto3emiateste.firebaseapp.com",
    projectId: "projeto3emiateste",
    storageBucket: "projeto3emiateste.appspot.com",
    messagingSenderId: "119919765809",
    appId: "1:119919765809:web:9a560419a11fcc314b6810"
  };firebase.initializeApp(firebaseConfig);
  
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {

 const email = emailField.value;
 const password = passwordField.value;

 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {

 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);

 })

 .catch((error) => {

 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);

 });

});
