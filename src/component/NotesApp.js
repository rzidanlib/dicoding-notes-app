import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import AddPage from '../pages/AddPages';
import NotFound from '../pages/NotFound';
import NotesHeader from './NotesHeader';
import ArchivePage from '../pages/ArchivePage';

function NotesApp() {
  return (
    <div className='app-container'>
      <NotesHeader />

      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/notes' element={<Navigate to='/' replace />}></Route>
          <Route path='/archive' element={<ArchivePage />}></Route>
          <Route path='/add' element={<AddPage />}></Route>
          <Route path='/notes/:id' element={<DetailPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default NotesApp;
