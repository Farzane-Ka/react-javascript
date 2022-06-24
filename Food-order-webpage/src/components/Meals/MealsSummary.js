import classes from './Meals.summary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>
                dDelicious food for you!
            </h2>
            <p>
                Choose your favorite meal from our broad selection.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </section>
    )

}

export default MealsSummary;