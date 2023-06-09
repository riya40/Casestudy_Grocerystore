import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container,Grid} from '@mui/material';
import ResponsiveAppBar from './Components/AppBarComponent';
import BottomNavigationComponent from './Components/BottomNavigation';
import LoginForm from './Components/LoginComponents';
import Grocery from './Components/GroceryCardComponent';
import RegistrationForm from './Components/UserRegistration';

function App() {
  return (
    
    <div>
      
      <ResponsiveAppBar/>
      <br/>
    
      <Container maxWidth='lg' sx={{marginTop: '2rem'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Grocery
                          imageUrl='https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum-Low-Carb-Keto-Pancakes-Recipe-21.jpg'
                          dishName='Vegetables'
                          dishDescription= 'Vegetables and fruits are an important part of a healthy diet, and variety is as important as quantityNo single fruit or vegetable provides all of the nutrients you need to be healthy Eat plenty every day'
             />
             </Grid>
             <Grid item xs={12} sm={6} md={4}>
                        <Grocery
                              imageUrl='https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350'
                             dishName='Fruits'
                              dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
                        />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Grocery
                        imageUrl='https://www.thelist.com/img/gallery/what-happens-to-your-body-when-you-drink-iced-tea-every-day/intro-1593618977.jpg'
                            dishName='Ice Tea'
                        dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
                        />
                    </Grid>
                </Grid>
            </Container> 
      <BottomNavigationComponent/>
      <RegistrationForm/>
      <LoginForm/>

      
    </div>
  );
};


export default App;