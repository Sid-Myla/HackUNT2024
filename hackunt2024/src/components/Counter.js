// src/components/Counter.js
import React, { useEffect, useState } from 'react';
import { database } from '../firebase/firebaseConfig'; // Adjust the path as necessary
import { ref, set, get, onValue } from 'firebase/database';

const Counter = () => {
  const [count, setCount] = useState(0); // Local state for count

  const updateCount = async (newCount) => {
    const countRef = ref(database, 'tack/count/current');
    try {
      await set(countRef, newCount);
      console.log('Count updated successfully!');
    } catch (error) {
      console.error('Error updating count:', error);
    }
  };

  const getCount = async () => {
    const countRef = ref(database, 'tack/count/current');
    try {
      const snapshot = await get(countRef);
      if (snapshot.exists()) {
        setCount(snapshot.val()); // Update local state
        console.log('Current count:', snapshot.val());
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error getting count:', error);
    }
  };

  const listenForCountChanges = () => {
    const countRef = ref(database, 'tack/count/current');
    onValue(countRef, (snapshot) => {
      const countValue = snapshot.val();
      setCount(countValue); // Update local state on change
      console.log('Updated count:', countValue);
    });
  };

  useEffect(() => {
    getCount(); // Get the initial count
    listenForCountChanges(); // Start listening for changes

    // Cleanup function if needed
    return () => {
      // Cleanup logic (if any) goes here
    };
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => updateCount(count + 1)}>Increment</button>
        <button onClick={() => updateCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
