document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsDiv = document.getElementById('posts');

    // Fonction pour récupérer et afficher les posts
    function fetchPosts() {
        fetch('http://localhost:3000/api/posts')
            .then(response => response.json())
            .then(posts => {
                console.log('Fetched posts:', posts); // Vérification des données reçues
                let postsHTML = '';
                posts.forEach(post => {
                    postsHTML += `
                        <div class="post">
                            <h2>${post.title}</h2>
                            <p>${post.content}</p>
                        </div>
                    `;
                });
                postsDiv.innerHTML = postsHTML;
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    // Fonction pour créer un nouveau post
    function createPost(title, content) {
        console.log('Sending POST request with:', { title, content }); // Vérification des données envoyées

        fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
            .then(response => response.json())
            .then(post => {
                console.log('Post created:', post); // Vérification de la réponse
                fetchPosts(); // Rafraîchit la liste des posts
                postForm.reset(); // Réinitialise le formulaire
            })
            .catch(error => console.error('Error:', error));
    }

    // Écouteur d'événements pour la soumission du formulaire
    postForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        console.log('Form data:', { title, content }); // Vérification des données du formulaire

        // Appel de la fonction pour créer un post
        createPost(title, content);
    });

    // Initial fetch des posts pour les afficher lors du chargement de la page
    fetchPosts();
});