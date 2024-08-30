document.addEventListener('DOMContentLoaded', function() {
    fetchCategories();

    function fetchCategories() {
        fetch(`https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&categoryType=large&applicationId=1003491522350830410`)
            .then(response => response.json())
            .then(data => {
                displayCategories(data.result.large);
            });
    }

    function displayCategories(categories) {
        const container = document.getElementById('categories-container');
        categories.forEach(category => {
            const div = document.createElement('div');
            div.className = 'category-tag';
            div.textContent = category.categoryName;
            div.onclick = () => fetchRecipes(category.categoryId);
            container.appendChild(div);
        });
    }

    function fetchRecipes(categoryId) {
        fetch(`https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId=${categoryId}&applicationId=1003491522350830410`)
            .then(response => response.json())
            .then(data => {
                displayRecipes(data.result);
            });
    }

    function displayRecipes(recipes) {
        const container = document.getElementById('recipes-container');
        container.innerHTML = ''; // Clear previous recipes
        recipes.forEach(recipe => {
            const div = document.createElement('div');
            div.className = 'recipe-item';
            div.innerHTML = `<strong>${recipe.recipeTitle}</strong><p>${recipe.recipeDescription}</p><img src="${recipe.foodImageUrl}" alt="Food Image"><a href="${recipe.recipeUrl}" target="_blank">詳細を見る</a>`;
            container.appendChild(div);
        });
    }
});
