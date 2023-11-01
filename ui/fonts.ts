import {Nunito } from 'next/font/google'


export const nunito = Nunito({
    subsets: ['latin'],
    variable:'--font-nunito'
})

//  when nunito .variable class is applied it injects --font-nunitoo variable with given font-family