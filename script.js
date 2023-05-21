// script.js
// Dynamically load content based on the page
function loadContent(page) {
    var content = document.getElementById('content');
    var xhr = new XMLHttpRequest();
  
    xhr.onload = function() {
      content.innerHTML = xhr.responseText;
    };
  
    xhr.open('GET', page, true);
    xhr.send();
  }
  
  // Add event listeners to the navigation links
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav ul li a');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        var page = this.getAttribute('href');
        loadContent(page);
      });
    });
  });
  
  // Publish a post
  document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    var authorName = document.getElementById('author-name').value;
    var postContent = document.getElementById('post-content').value;
  
    var blogPosts = document.getElementById('blog-posts');
    var postElement = document.createElement('div');
    postElement.classList.add('post');
  
    var authorElement = document.createElement('h3');
    authorElement.textContent = authorName;
    postElement.appendChild(authorElement);
  
    var contentElement = document.createElement('p');
    contentElement.textContent = postContent;
    postElement.appendChild(contentElement);
  
    blogPosts.appendChild(postElement);
  
    // Clear form fields
    document.getElementById('author-name').value = '';
    document.getElementById('post-content').value = '';
  });
  