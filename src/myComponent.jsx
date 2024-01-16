// SelectUser.js
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './css/SelectedUser.css';

const SelectUser = () => {
  const [users, setUsers] = useState([]);
  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=50');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

 
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter users based on the input value and exclude selected emails
    const filteredUsers = users.filter(
      (user) =>
        (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value.toLowerCase()) ||
          user.email.toLowerCase().includes(value.toLowerCase())) &&
        !emails.includes(user.email)
    );

    setSuggestedUsers(filteredUsers);
    setIsSuggestionsVisible(true); // Show suggestions as soon as the user starts typing
  };

  const handleAddEmail = (selectedUser) => {
    setEmails([...emails, selectedUser.email]);
    setInputValue('');
    setIsSuggestionsVisible(false);
    inputRef.current.focus();
  };

  const handleDeleteEmail = (emailToDelete) => {
    const updatedEmails = emails.filter((email) => email !== emailToDelete);
    setEmails(updatedEmails);
  };

  const handleInputFocus = () => {
    setIsSuggestionsVisible(true);
  };

  const handleInputBlur = () => {
    // Delay hiding the suggestions to allow events like double-click to be registered
    setTimeout(() => {
      setIsSuggestionsVisible(false);
    }, 200);
  };

  const handleBackspace = (e) => {
    if (e.key === 'Backspace' && inputValue === '') {
      const lastEmail = emails[emails.length - 1];
      handleDeleteEmail(lastEmail);
    }
  };

  return (
    <>
      <div className="chips-container">
        {emails.map((email) => (
          <div key={email} className="chip">
            <div>{email}</div>
            <span className="delete-icon" onClick={() => handleDeleteEmail(email)}> &#10006;</span>
          </div>
        ))}
      </div>
      <div className="suggestions-container">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleBackspace}
          placeholder="Type to search or add..."
          className="select-user-input"
        />
        {isSuggestionsVisible && suggestedUsers.length > 0 && (
          <div className="suggestions-list">
            {suggestedUsers.map((user) => (
              <div
                key={user.login.uuid}
                className="suggestion-item"
                onClick={() => handleAddEmail(user)}
              >
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="suggestion-item-image"
                />
                <div className="suggestion-item-name">{`${user.name.first} ${user.name.last}`}</div>
                <div className="suggestion-item-email">{user.email}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectUser;
