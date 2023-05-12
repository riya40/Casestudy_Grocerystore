import RegistrationForm from "../Components/UserRegistration";
import LoginForm from "../Components/LoginComponents";
import ResponsiveAppBar from './Components/AppBarComponent';

export default function top() {
    return (
      <>
          <ResponsiveAppBar />
          <RegistrationForm />
          <LoginForm />
      </>
    )
  }