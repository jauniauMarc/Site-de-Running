/*************************************************************************
*   Chargement des modules nécessaires au fonctionnement du serveur      *
*                et Configuration du serveur express                     *                                                                                                 *
**************************************************************************/

// Chargement des modules nécessaires au fonctionnement du serveur
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
var fs = require('fs');
require('dotenv').config();


// Configuration du serveur express
const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Définir la route http://127.0.0.1:3000/ pour index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Le serveur Express écoute sur le port 3000
app.listen(3000, () => {
    console.log('Le serveur est en écoute sur le port 3000');
});

const LINK = process.env.LINK
const Utilisateurs = process.env.Utilisateurs
const MotDePasse = process.env.MotDePasse



/*********************************************************************
*  --Todo 1--   Connexion à la base de données MongoDB (SpaceX)      *                                                                                             
*                                                                    *      ---commit -m "Todo 1"---
* Document ressource:   https://mongoosejs.com/docs/connections.html *                                                                                                                                           
**********************************************************************/

// Connexion à la base de données
mongoose.connect(LINK)



/********************************************************************************
*  --Todo 2--      Vérification de la connexion à la base de données SpaceX     *                                                                                         
*                                                                               *       ---commit -m "Todo 2"---
* Document ressource:   https://youtu.be/V8dY  GNfHjfk?si=1TEKPUPoA8ayLmEs        *                                                                                                                                           
*********************************************************************************/

// Vérification de la connexion à la base de données

.then(()=>{
  console.log("mongodb connected");
})
.catch(()=>{
  console.log("failed to connect");
})



  /********************************************************************************
  *  --Todo 3--      Création du model schema pour la collection users            *                                                                                         
  *                   !!!!! Vous n'avez qu'à compléter le schema !!!!!            *     ---commit -m "Todo 3"---
  * Document ressource:   https://mongoosejs.com/docs/guide.html                  *                                                                                                                                           
  *********************************************************************************/
  
  // Création du model schema pour la collection users 
  // Complétez le modéle selon les besoins de votre formulaire 

  const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
      prenom:{
        type:String,
        required:true
      },
        email:{
        type:String,
        required:true
        },
          password:{
            type:String,
            required:true
          },
          message:{
            type:String,
            required:true
          }

    });
  
  

  // Création du model mongoose pour l'intereaction avec la base de données SpaceX (https://mongoosejs.com/docs/api/model.html#Model())
  const User = mongoose.model('User', userSchema);
  
    
  /*****************************************************************************************************************************
  *  --Todo 4--      Création d'une route HTTPavec la méthode "POST" pour récupérer les données du formulaire d'inscription    *                                                                                         
  *                                                                                                                            *   ---commit -m "Todo 4"---
  * Document ressource:   https://docs.google.com/presentation/d/1cQR0cyTpMT2oYpIXWPNOmK55C_Fr8fycB5ApvrytADY/edit?usp=sharing *                                                                                                                                           
  ******************************************************************************************************************************/
  
  // Définition de l'itinéraire d'inscription et chargement de données à partir du formulaire d'inscription
  
app.post('/signup', async (req, res) => {
  let name = req.body.name;
  let prenom = req.body.firstName;
  let email = req.body.email;
  let password = await bcrypt.hash(req.body.password, 10);
  let message = req.body.message;
  console.log('/signup');

  



  /****************************************************************************************
  *  --Todo 4-1--       Vérifiez que tous champs du formulaire sont complétés             *   ---commit -m "Todo 4-1"---                                                                                      
  *                                                                                       *
  *****************************************************************************************/
   
  // Vérification des champs requis
  if (!name || !prenom || !email || !password || !message ) {
    return res.status(400).send('Tous les champs doivent être remplis.');
  }



  /********************************************************************************
  *  --Todo 4-2--                Créez un nouvel utilisateur                      *      ---commit -m "Todo 4-2"---                                                                                     
  *                                                                               *                                                                                                                                  
  *********************************************************************************/
    
    // Création d'un nouvel utilisateur
  const newUser = new User({
    name: name,
    prenom: prenom,
    email: email,
    password: password,
    message: message
  });
   const double =  await User.findOne({email});
   if(double){
    return res.redirect('email\'deja\'utiliser')
   };

  /********************************************************************************
  *  --Todo 4-3--   Enregistez le nouveau utilisateur dans la base de données     *            ---commit -m "Todo 4-3"---                                                                             
  *                                                                               *                                                                                                                                          
  *********************************************************************************/

    // Sauvegarde du nouvel utilisateur dans la base de données
    
  await newUser.save();


  /*********************************************************************************
  *  --Todo 4-4--  Affichez sur la console un message pour une inscription réussie *        ---commit -m "Todo 4-4"---                                                                                    
  *                Redérigiez l'utilisateur vers la page "inscription-réussie"     *
  **********************************************************************************/

// Redirection vers la page d'inscription réussie
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: Utilisateurs ,
      pass: MotDePasse ,
  }
});
 
 transporter.sendMail({
  from: 'marc.jauniau@lycee-jeanrostand.fr',
  to: email,
  subject: 'Confirmation d\'inscription',
  text: `Bonjour ${name}, merci de vous être inscrit. Votre compte a bien été créé.`
}, (error, info) => {
  if (error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail:', error.message);
      return res.status(500).send('Une erreur est survenue lors de l\'inscription.');
  } else {
      console.log('E-mail de confirmation envoyé:', info.response);
      return res.redirect('inscription-réussie.html');
  }
});
   
console.log("Enregistrement-reussi");
return res.redirect('inscription-réussie.html');

});
  /******************************************************************************************************************** 
  *  --Todo 5--  Création d'une route HTTPavec la méthode "POST" pour vérifier les données du formulaire de connexion *                                                                                         
  *                                                                                                                   *    ---commit -m "Todo 5"---
  * Document ressource:  Maintenant c'est à vous de coder la partie singin                                            *                                                                                                                                           
  *********************************************************************************************************************/

// Création de la route HTTP avec la méthode "POST" pour vérifier les données du formulaire de connexion



app.post('/signin',async (req,res)=>{
  let Email = req.body.email;
  let password = req.body.password;
  console.log('/signin');

    let utilisateurs = await User.findOne({
      email : Email
    })
    if(utilisateurs){ 
      if(await bcrypt.compare(password, utilisateurs.password)){
        console.log("Connexion réussie");
        let message = fs.readFileSync('connexion-réussie.html', 'utf8');
        message = message.replace(`Welcome !`, `welcome ${utilisateurs.name} !`);
        res.send(message);
      
    }else{
      console.log("pas d'utilisateurs reconnus");
      res.send("email ou mot de passe incorrects");
    }
  }else{
    console.log("Utilisateurs pas reconnus");
    res.send("email ou mot de passe incorrects");
  }
})