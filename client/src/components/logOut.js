import { useAuthContext } from './AuthContext';
import toast from 'react-hot-toast';
import { useState } from 'react';

const LogOut = () => {
  const { setAuthUser } = useAuthContext();
  const logoutfxn = () => {
    try {
        localStorage.removeItem('authorized');
        setAuthUser(null);
        toast.success('Logged Out successfully. Bye');
    } catch (error) {
      throw new Error('Logout not succesful');
      toast.error(error)
    }
  }
return { logoutfxn };
}

export default LogOut;
