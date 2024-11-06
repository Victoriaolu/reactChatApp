const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    // Optionally, redirect the user to the login page
    window.location.href = '/login'; // Redirect to login page
};
 <button onClick={handleLogout}>Logout</button>


