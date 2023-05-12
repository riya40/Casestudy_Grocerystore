import { Card,CardMedia,CardContent, Typography } from "@mui/material";

function Grocery({imageUrl='default',dishName='default',dishDescription='default'}){
    return(
        <Card>
            <CardMedia
                component="img"
                height="200"
                image='https://www.hsph.harvard.edu/nutritionsource/wp-content/uploads/sites/30/2012/09/vegetables-and-fruits-farmers-market.jpg'
                alt="Food Image !"
            />
            <CardContent>
            <Typography variant="h5" component="div" >
                    {dishName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {dishDescription}
                </Typography>    
            </CardContent>            
        </Card>
    )
}
export default Grocery;