import React from "react";
import { Grid,Container } from "@mui/material";
import Grocery from "../GroceryCardComponent";
import UserProfile from "../ProfileComponent";

const GroceryNavigation = ()=> {
      return (
        <>
        <UserProfile/>
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
                            dishName='spices
                            '
                        dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
                        />
                    </Grid>
                </Grid>
            </Container>   
        </>
    )
    
}
export default GroceryNavigation;