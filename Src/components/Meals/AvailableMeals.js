import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {id: 'm1',name: 'Momos',description: 'Type of Dumpling, famous in Himalyan region',price: 20,},
    {id: 'm2',name: 'Pizza',description: 'Round Italian Dish topped with tomatoes, cheeze and other ingredients',price: 80,},
    {id: 'm3',name: 'Idli Sambar',description: 'South Indian Breakfast Meal!',price: 60,},
    {id: 'm4',name: 'Paneer Roll',description: 'Healthy...and green..!',price: 40,},
  ];
  
  const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  };
  
  export default AvailableMeals;