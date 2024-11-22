import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Register = () => {
  const [ loading, setLoading ] = useState(false);

  const signup = async ({ email, username, password, bio }) => {
    setLoading(true);
    try {
      const sendUser = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password, bio })
      });
     if (sendUser) {
      const user = await sendUser.json();
      if (user.error) {
        throw new Error(user.error);
      }
      console.log(user.newUser);
      toast.success(user.message);
     } else {
        throw new Error('Failed to fetch data from server');
     }
    } catch(error) {
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };

};

export default Register;
