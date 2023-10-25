
<template>
  <form @submit.prevent="resetPassword">
    <input v-model="password" type="password" placeholder="Nouveau mot de passe">
    <input v-model="password_confirmation" type="password" placeholder="Confirmez le mot de passe">
    <button type="submit">Réinitialiser le mot de passe</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      password_confirmation: '',
    };
  },
  methods: {
    async resetPassword() {
      try {
        const token = 'le-token-reçu-de-l-email'; // Obtenez le token du lien de réinitialisation
        const response = await axios.post('/api/password/reset', {
          email: 'email-utilisateur',
          password: this.password,
          password_confirmation: this.password_confirmation,
          token: token,
        });
        console.log(response.data); // Le message de succès ou d'erreur sera renvoyé par Laravel
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
Déconnexion de l'utilisateur :

Pour permettre à un utilisateur de se déconnecter, vous pouvez créer un bouton ou une action qui envoie une requête POST à la route de déconnexion correspondante de Laravel.

javascript
Copy code
// Composant Vue.js
<template>
  <button @click="logout">Déconnexion</button>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        const response = await axios.post('/api/logout');
        console.log(response.data); // Le message de succès ou d'erreur sera renvoyé par Laravel
        // Vous pouvez rediriger l'utilisateur vers la page d'accueil ou effectuer d'autres actions ici
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
Assurez-vous que votre composant Vue.js a accès au token d'authentification de l'utilisateur pour inclure ce token dans les requêtes HTTP, et adaptez les exemples ci-dessus en fonction de la structure de votre application Vue.js et de votre logique de gestion des utilisateurs.





