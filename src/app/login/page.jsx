"use client";

import Input from '@/components/Input';
import { Form, Formik } from 'formik'
import React from 'react'

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Formik>{({ values }) =>
        <Form noValidate>
          <Input name="email" type="email" required />
          <Input name="password" type="password" required autoComplete="off" />
        </Form>}</Formik>
    </main>
  )
}
