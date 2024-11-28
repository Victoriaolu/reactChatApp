import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const FetchUsers = () => {
  const [loading, setLoading] = useState(false);
  const [allusers, setAllusers]  = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const { token } = await  JSON.parse(localStorage.getItem('authorized'));
        const comm = await fetch('http://localhost:5000/api/chat/all', {
          headers: {"Authorization": `Bearer ${token}` }
        });
        const resp = await comm.json();
        console.log(resp);
        if (resp.error) {
          throw new Error(resp.error);
        }
        setAllusers(resp);
      } catch (error) {
       toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  },[]);
  return { loading, allusers }
}

export default FetchUsers;
