import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Notes from './Notes';

function Root() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Navigate to="/notes" />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </MainTemplate>
  );
}

export default Root;
