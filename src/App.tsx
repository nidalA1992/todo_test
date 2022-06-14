import React from 'react';
import { Content } from './Content';
import { ControlContextProvider } from './context/conrolContext';
import { DataContextProvider } from './context/dataContext';
import { LocalStorageContextProvider } from './context/localStorageContext';
import { Header } from './Header';
import { Layout } from './Layout';
import './main.global.css';
import { TodoInput } from './TodoInput';
import { TodoTable } from './TodoTable';

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
