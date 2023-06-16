<template>
    <div class="about-page">
      <div class="about-content">
        <h1>About Vue Recipes</h1>
        <p>Welcome to Vue Recipes, your ultimate destination for discovering and sharing delicious recipes!</p>
        <p>At Vue Recipes, we believe that cooking is an art form and food brings people together. Our platform offers a wide range of recipes that cater to different tastes, preferences, and dietary needs. Whether you're a seasoned chef or a cooking enthusiast, you'll find something delightful to try.</p>
        
        <h2>Features</h2>
        <ul>
          <li><strong>Login and Register:</strong> Create your own account to unlock additional features, save your favorite recipes, and access personalized content.</li>
          <li><strong>Personal Recipes:</strong> Share your own culinary creations with the community by adding your personal recipes to our platform. Showcase your talent and inspire others to get creative in the kitchen.</li>
          <li><strong>Family Recipes:</strong> Discover and explore a collection of cherished family recipes contributed by our community members. These recipes have been passed down through generations, capturing the essence of tradition and love.</li>
          <li><strong>Search Recipes:</strong> Easily search for recipes based on various criteria such as ingredients, dietary preferences, cooking time, and more. Find the perfect recipe to satisfy your cravings or meet your specific dietary needs.</li>
        </ul>
        
        <h2>Recipe Details</h2>
        <p>Each recipe on Vue Recipes provides comprehensive details to help you create delicious dishes:</p>
        <ul>
          <li><strong>Dietary Information:</strong> We understand that dietary preferences and restrictions vary. That's why our recipes are labeled with dietary information such as gluten-free, vegan, vegetarian, and more. You can easily find recipes that align with your specific dietary choices.</li>
          <li><strong>Instructions:</strong> Our recipes come with detailed step-by-step instructions to guide you through the cooking process. Whether you're a beginner or an experienced chef, you'll find clear directions to achieve outstanding results.</li>
          <li><strong>Images:</strong> Visual appeal is essential when it comes to cooking. Each recipe includes mouthwatering images to give you a glimpse of what the final dish should look like. Get inspired and let your culinary creativity soar!</li>
          <li><strong>Ingredients:</strong> We provide a complete list of ingredients required for each recipe. You can easily reference the ingredients and ensure you have everything you need before you start cooking.</li>
        </ul>
        
        <p>Join our vibrant community of food enthusiasts, share your passion for cooking, and discover an incredible world of flavors at Vue Recipes!</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f2f2;
  }
  
  .about-content {
    max-width: 800px;
    padding: 40px;
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  
  ul {
    text-align: left;
    margin-left: 40px;
  }
  
  li {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  
  strong {
    font-weight: bold;
  }
  
  </style>