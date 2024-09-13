<template>
    <div>
      <h1>Add Book</h1>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
      </form>


    <!-- button to update book -->
    <div>
        <h2>Update Book</h2>
        <form @submit.prevent="updateBookByIsbn">
            <div>
            <label for="isbn-update">ISBN to Update:</label>
            <input type="text" v-model="isbnToUpdate" id="isbn-update" required />
            </div>
            <div>
                <label for="new-name">New Name:</label>
                <input type="text" v-model="newName" id="new-name" required />
            </div>
            <button type="submit">Update Book</button>
        </form>
    </div>
  
      <!-- button to delete book -->
    <div>
        <h2>Delete Book</h2>
        <form @submit.prevent="deleteBookByIsbn">
            <div>
                <label for="isbn-delete">ISBN to Delete:</label>
                <input type="text" v-model="isbnToDelete" id="isbn-delete" required />
            </div>
            <button type="submit">Delete Book</button>
        </form>
      </div>
    </div>


  </template>
<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc, query, where, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

import BookList from '../components/BookList.vue';

export default {
  setup() {
    const isbn = ref('');
    const name = ref('');
    const isbnToUpdate = ref('');
    const newName = ref('');
    const isbnToDelete = ref('');

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        });

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
      }
    };

    const updateBookByIsbn = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '==', Number(isbnToUpdate.value)));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          alert('No matching book found');
          return;
        }

        querySnapshot.forEach(async (doc) => {
          const bookRef = doc.ref;
          await updateDoc(bookRef, {
            name: newName.value
          });
        });

        alert('Book updated successfully!');
        isbnToUpdate.value = '';
        newName.value = '';
      } catch (error) {
        console.error('Error updating book: ', error);
      }
    };

    // Delete a book by ISBN
    const deleteBookByIsbn = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '==', Number(isbnToDelete.value)));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          alert('No matching book found');
          return;
        }

        querySnapshot.forEach(async (doc) => {
          const bookRef = doc.ref;
          await deleteDoc(bookRef);
        });

        alert('Book deleted successfully!');
        isbnToDelete.value = '';
      } catch (error) {
        console.error('Error deleting book: ', error);
      }
    };

    return {
      isbn,
      name,
      addBook,
      isbnToUpdate,
      newName,
      updateBookByIsbn,
      isbnToDelete,
      deleteBookByIsbn
    };

  },
  components: {
    BookList
  }

  
};

 
  




</script>