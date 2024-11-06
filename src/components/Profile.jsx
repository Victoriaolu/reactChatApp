import React, { useState } from 'react';

const Profile = ({ user }) => {
    const [bio, setBio] = useState(user.bio);

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log('Updated Bio:', bio);
        // Logic to update bio in backend goes here
    };

    return (
        <div>
            <h2>Your Profile</h2>
            <textarea value={bio} onChange={handleBioChange} placeholder="Edit your bio..." />
            <button onClick={handleUpdateProfile}>Update Bio</button>
            {/* Display other users' bios here */}
        </div>
    );
};

export default Profile;
