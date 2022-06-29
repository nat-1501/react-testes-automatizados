import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';


describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () => {
        it('Mostrar o nome do banco', () => {
        render(<App />);

        expect(screen.getByText('ByteBank')).toBeInTheDocument();
    })

    it('Mostrar o nome do banco', () => {
        render(<App />);

        expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })

    it('O botão de realizar transação é exibido ', () => {
        render(<App />);

        expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
})
})
   
