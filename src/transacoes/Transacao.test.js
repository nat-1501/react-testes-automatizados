import { render } from "@testing-library/react";
import Transacao from "./Transacao";
import React from 'react';

describe('Componente de transação do extrato', () => {
    it('O snapshot do component deve permanecer sempre o mesmo', 
    () => {
        const { container} = render(<Transacao
            data="29/06/2022"
            tipo="saque"
            valor="20.00"

        />)

        expect(container.firstChild).toMatchSnapshot();
    })
})