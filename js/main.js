"use strict";
// Find the elements
const date = document.getElementById("date");
const author = document.getElementById("author");
const blog = document.getElementById("blog");
const body = document.querySelector("body");
// "About" listening event
date.addEventListener("click", () => {
  async function fetchData() {
    try{
     const response = await fetch("https://api.quotable.io/random");
     if (!response.ok) {
       throw new Error("Something went wrong");
     }
      // Create the elements in the container
      const container = document.getElementById("container");
      container.innerHTML = "";
      const data = await response.json();
      container.innerHTML = `
      <h1>Date</h1>
      <p class="text">Date created: <span>${data.dateAdded}<span></p>
      `;
      body.appendChild(container);
    }catch(error) {
      console.log(error);
      table.nextElementSibling.innerHTML = "Oops! Something went wrong."  
    }
    }
    fetchData();
  });

// "Author" listening event
author.addEventListener("click", () => {
  async function fetchData() {
    try{
     const response = await fetch("https://api.quotable.io/random");
     if (!response.ok) {
       throw new Error("Something went wrong");
     }
      // Create the elements in the container
      const container = document.getElementById("container");
      container.innerHTML = "";
      const data = await response.json();
      container.innerHTML = `
      <h1>Author</h1>
      <p class="text author">${data.author}</p>
      `;
      body.appendChild(container);
    }catch(error) {
      console.log(error);
      table.nextElementSibling.innerHTML = "Oops! Something went wrong."  
    }
    }
    fetchData();
  });

// "Blog" listening event
blog.addEventListener("click", () => {
  async function fetchData() {
    try{
     const response = await fetch("https://api.quotable.io/random");
     if (!response.ok) {
       throw new Error("Something went wrong");
     }
     const container = document.getElementById("container");
     container.innerHTML = "";
     const data = await response.json();
      // Create the elements in the container
      container.innerHTML = `
      <h1 class="blog-title">Quote (<i><u>Click me</u></i>)&#128540</h1> 
      <div class="blog-container text">
          <p>Date Modified: <span>${data.dateModified}</span></p>
          <p class="quote-content">"${data.content}"</p>
          <p class="tag">Tags: <span>${data.tags.join(", ")}</span></p>
      </div>
      `;

        // Unbind the extra click on each title
        $(document).ready(function(){
          $(".blog-title").unbind().click();
        // Bind the click on each title
          $(".blog-title").bind("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(this).next(".blog-container").slideToggle("slow");
          });
        })
        body.appendChild(container);
      }catch(error) {
          console.log(error);
          table.nextElementSibling.innerHTML = "Oops! Something went wrong."  
      }
        }
        fetchData();
      });
