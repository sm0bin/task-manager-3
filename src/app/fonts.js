// app/fonts.ts
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    subsets: ['latin'],
    variable: '--font-mulish',
})

export const fonts = {
    mulish,
}