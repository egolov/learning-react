import Recipe from './Recipe'

const Menu = ({ recipes }) =>
    <article>
        <header>
            <h1>Delicious recipes</h1>
        </header>
        <div className='recipes'>
            {
                recipes.map((recipe, i) =>
                    <Recipe key={i} {...recipe}/>
                )
            }
        </div>
    </article>

export default Menu
// {...recipe} the same as
// name={recipe.name}
// ingredients={recipe.ingredients}
// steps={recipe.steps}