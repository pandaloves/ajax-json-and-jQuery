"use strict";
// Find the elements
const about = document.getElementById("about");
const author = document.getElementById("author");
const blog = document.getElementById("blog");
const body = document.querySelector("body");
// "About" listening event
about.addEventListener("click", () => {
  async function fetchDate() {
    try{
     let response = await fetch("https://codexplained.se/simple_json.php");
     if (!response.ok) {
       throw new Error("Something went wrong");
     }
     let data = await response.text();
      // Create the elements in the container
      const container = document.getElementById("container");
      container.innerHTML = "";
      body.appendChild(container);
      const h1 = document.createElement("h1");
      h1.innerHTML = "About";
      container.appendChild(h1);
      const text = JSON.parse(data);
      const textAbout = text.about;
      const p = document.createElement("p");
      p.classList.add("text");
      p.innerHTML = textAbout;
      container.appendChild(p);
    }catch(error) {
      console.log(error);
      table.nextElementSibling.innerHTML = "Oops! Something went wrong."  
    }
    }
    fetchDate();
  });

// "Author" listening event
author.addEventListener("click", () => {
  async function fetchDate() {
    try{
     let response = await fetch("https://codexplained.se/simple_json.php");
     if (!response.ok) {
       throw new Error("Something went wrong");
     }
     let data = await response.text();
      // Create the elements in the container
      const container = document.getElementById("container");
      container.innerHTML = "";
      body.appendChild(container);
      const h1 = document.createElement("h1");
      h1.innerHTML = "Author";
      container.appendChild(h1);
      const text = JSON.parse(data);
      const textAuthor = text.author;
      const p = document.createElement("p");
      p.classList.add("text");
      p.innerHTML = textAuthor;
      container.appendChild(p);
    }catch(error) {
      console.log(error);
      table.nextElementSibling.innerHTML = "Oops! Something went wrong."  
    }
    }
    fetchDate();
  });

// "Blog" listening event
blog.addEventListener("click", () => {
  async function fetchDate() {
    try{
     let response = await fetch("https://codexplained.se/simple_json.php");
     if (!response.ok) {
       throw new Error("Something went wrong");
     }
     let data = await response.text();
      // Create the elements in the container
      const container = document.getElementById("container");
      container.innerHTML = "";
      body.appendChild(container);
      const h1 = document.createElement("h1");
      h1.innerHTML = "Blog posts";
      container.appendChild(h1);
      const text = JSON.parse(data);
      const textBlog = text.blog_posts;
      console.log(textBlog);
      // Create the elments in the posts
      for (let i = 0; i < textBlog.length; i++) {
        const array = textBlog[i];
        const article = document.createElement("article");
        container.appendChild(article);
        const h2 = document.createElement("h2");
        h2.classList.add("blog-title");
        const title = array.title;
        h2.innerHTML = title;
        console.log(h2);
        article.appendChild(h2);
        // Create another container to hold the date, post and tags
        const blogContainer = document.createElement("div");
        blogContainer.classList.add("blog-container");
        // Create the elements for the new container
        const span = document.createElement("span");
        const date = array.date;
        span.innerHTML = date;
        console.log(span);
        blogContainer.appendChild(span);
        const p = document.createElement("p");
        const blogEl = array.text;
        p.innerHTML = blogEl;
        console.log(p);
        blogContainer.appendChild(p);
        const tag = document.createElement("p");
        tag.classList.add("tag");
        const tagContent = array.tags.join(", ");
        console.log(tagContent);
        tag.innerHTML = `Tags: ${tagContent}`;
        blogContainer.appendChild(tag);
        article.appendChild(blogContainer);
        // Unbind the extra click on each title
        $(document).ready(function(){
          $(".blog-title").unbind().click();
        // Bind the click on each title
          $(".blog-title").bind("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(this).next(".blog-container").slideToggle("slow");
          });
        });
      }
      }catch(error) {
          console.log(error);
          table.nextElementSibling.innerHTML = "Oops! Something went wrong."  
      }
        }
        fetchDate();
      });
