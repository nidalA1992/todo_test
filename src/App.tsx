import React from 'react';
import './main.global.css';
import { Header } from './Header';
import { Layout } from './Layout';
import { Content } from './Content';
import { TodoTable } from './TodoTable';
import { TodoInput } from './TodoInput';
import { DataContextProvider } from './context/dataContext';
import { ControlContextProvider } from './context/conrolContext';
import { LocalStorageContextProvider } from './context/localStorageContext';

export function App() {
  return (
    <LocalStorageContextProvider>
      <ControlContextProvider>
        <DataContextProvider>
          <Layout>
            <Header />
            <Content>
              <TodoInput />
              <TodoTable />
            </Content>
          </Layout>
        </DataContextProvider>
      </ControlContextProvider>
    </LocalStorageContextProvider>
  );
}
