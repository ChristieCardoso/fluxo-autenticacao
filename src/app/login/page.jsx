"use client";

import Button from '@/components/Button';
import Input from '@/components/Input';
import { Form, Formik } from 'formik'
import React from 'react'

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Formik>{({ values }) =>
        <Form noValidate className="flex flex-col gap-2 p-4 border rounded border-zinc-300 min-w-[300px] bg-white">
          <Input name="email" type="email" required />
          <Input name="password" type="password" required autoComplete="off" />
          <Button
            type="submit"
            text="Entrar"
            className="bg-green-500 text-white rounded p-2 cursor-pointer" />
        </Form>}</Formik>
    </main>
  )
}
