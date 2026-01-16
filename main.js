
class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const author = this.getAttribute('author');
        const cover = this.getAttribute('cover');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    border-radius: 12px; /* Ensure consistency */
                }
                .card-content {
                    padding: 1rem 1.2rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                img {
                    width: 100%;
                    height: 280px;
                    object-fit: cover;
                }
                h3 {
                    font-family: 'Playfair Display', serif;
                    margin: 0.5rem 0 0.2rem 0;
                    font-size: 1.4rem;
                    color: oklch(95% 0.01 240);
                    flex-grow: 1;
                }
                p {
                    font-family: 'Poppins', sans-serif;
                    margin: 0;
                    font-size: 0.9rem;
                    color: oklch(70% 0.01 240);
                }
            </style>
            <div>
                <img src="${cover}" alt="${title}">
            </div>
            <div class="card-content">
                <h3>${title}</h3>
                <p>${author}</p>
            </div>
        `;
    }
}

customElements.define('book-card', BookCard);

const bookList = document.getElementById('book-list');

async function loadBooks() {
    try {
        const response = await fetch('books.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const books = await response.json();
        renderBooks(books);
    } catch (error) {
        console.error('Kitaplar yüklenirken bir hata oluştu:', error);
        bookList.innerHTML = `<p style="color: oklch(80% 0.15 20);">Kitaplar yüklenemedi. Lütfen daha sonra tekrar deneyin.</p>`;
    }
}

function renderBooks(books) {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const bookCard = document.createElement('book-card');
        bookCard.setAttribute('title', book.title);
        bookCard.setAttribute('author', book.author);
        bookCard.setAttribute('cover', book.cover);
        
        // Apply staggered animation delay
        bookCard.style.animationDelay = `${index * 100}ms`;
        
        bookList.appendChild(bookCard);
    });
}

loadBooks();
